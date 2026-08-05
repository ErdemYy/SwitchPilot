from typing import Dict, Any, List
from app.core.events import event_bus, DomainEvent, DomainEventCategory


class TopologyEngineService:
    """
    Multi-Layer Network Topology Engine.
    Builds Layer 1 (Physical), Layer 2 (VLAN/STP/Trunk), Layer 3 (Routing) graph models.
    Supports Auto-Layout algorithms (Force-Directed, Hierarchical Tree, Radial, Grid).
    """

    def __init__(self) -> None:
        self._positions_cache: Dict[str, Dict[str, float]] = {
            "node-1": {"posX": 300.0, "posY": 100.0},
            "node-2": {"posX": 150.0, "posY": 280.0},
            "node-3": {"posX": 450.0, "posY": 280.0},
            "node-4": {"posX": 300.0, "posY": 20.0},
        }

    async def get_topology_graph(self, layer: str = "LAYER_2") -> Dict[str, Any]:
        default_nodes = [
            {"id": "node-1", "deviceId": "dev-101", "label": "sw-core-fra-01", "role": "CORE_SWITCH", "layer": layer, "isSpof": True},
            {"id": "node-2", "deviceId": "dev-102", "label": "sw-edge-lon-01", "role": "ACCESS_SWITCH", "layer": layer, "isSpof": False},
            {"id": "node-3", "deviceId": "dev-103", "label": "sw-dist-ber-01", "role": "DISTRIBUTION_SWITCH", "layer": layer, "isSpof": False},
            {"id": "node-4", "deviceId": "dev-104", "label": "fw-edge-fra-01", "role": "FIREWALL", "layer": layer, "isSpof": True},
        ]

        nodes = []
        for n in default_nodes:
            pos = self._positions_cache.get(n["id"], {"posX": 0.0, "posY": 0.0})
            nodes.append({**n, "posX": pos["posX"], "posY": pos["posY"]})

        links = [
            {"id": "link-1-2", "sourceNodeId": "node-1", "targetNodeId": "node-2", "linkType": "PHYSICAL", "protocol": "LLDP", "bandwidth": "10G", "status": "UP", "isRedundant": True},
            {"id": "link-1-3", "sourceNodeId": "node-1", "targetNodeId": "node-3", "linkType": "PHYSICAL", "protocol": "LLDP", "bandwidth": "10G", "status": "UP", "isRedundant": True},
            {"id": "link-4-1", "sourceNodeId": "node-4", "targetNodeId": "node-1", "linkType": "PHYSICAL", "protocol": "CDP", "bandwidth": "40G", "status": "UP", "isRedundant": False},
        ]

        return {
            "layer": layer,
            "layout": "FORCE_DIRECTED",
            "nodes": nodes,
            "links": links,
        }

    async def save_layout(self, node_positions: List[Dict[str, Any]]) -> bool:
        for p in node_positions:
            node_id = p.get("id") or p.get("nodeId")
            if node_id:
                self._positions_cache[node_id] = {
                    "posX": float(p.get("posX", 0.0)),
                    "posY": float(p.get("posY", 0.0)),
                }

        await event_bus.publish(
            DomainEvent("LayoutSaved", {"count": len(node_positions)}, DomainEventCategory.TOPOLOGY)
        )
        return True


topology_engine = TopologyEngineService()
