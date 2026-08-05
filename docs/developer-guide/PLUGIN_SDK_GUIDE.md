# SwitchPilot Plugin SDK & Developer Guide

## 1. Plugin Interface Contract
All custom extensions implement the `SwitchPilotPlugin` interface:
```typescript
export interface SwitchPilotPlugin {
  manifest: PluginManifest;
  initialize(context: PluginContext): Promise<void>;
  registerRoutes?(router: PluginRouter): void;
  registerTranslator?(engine: TranslationEngine): void;
  registerPolicy?(engine: PolicyEngine): void;
  dispose(): Promise<void>;
}
```
