// ---------------------------------------------------------------------------
// SwitchPilot Plugin SDK — Marketplace-Ready Lifecycle Interface
// ---------------------------------------------------------------------------

/**
 * Every third-party or internal SwitchPilot plugin MUST implement this interface.
 * The plugin host calls lifecycle hooks in the following order:
 *   initialize → register* → (runtime) → dispose
 */
export interface SwitchPilotPlugin {
  /** Unique plugin identifier (reverse-domain, e.g. "com.acme.snmp-poller"). */
  readonly pluginId: string;

  /** Human-readable display name shown in the Marketplace. */
  readonly displayName: string;

  /** Semver version string (e.g. "1.2.0"). */
  readonly version: string;

  // ── Lifecycle ──────────────────────────────────────────────────────────

  /** Called once when the plugin is loaded. Perform setup, validate config. */
  initialize(context: PluginContext): Promise<void>;

  /** Register additional REST / WebSocket routes with the API server. */
  registerRoutes?(registrar: RouteRegistrar): void;

  /** Register a vendor translator that extends the Vendor Translation Engine. */
  registerTranslator?(registrar: TranslatorRegistrar): void;

  /** Register custom policy rules that extend the Policy Engine. */
  registerPolicy?(registrar: PolicyRegistrar): void;

  /** Register custom workflow nodes for the Visual Workflow Builder. */
  registerWorkflow?(registrar: WorkflowRegistrar): void;

  /** Register dashboard widgets rendered inside the NOC Console. */
  registerWidgets?(registrar: WidgetRegistrar): void;

  /** Register custom telemetry collectors for the Monitoring Engine. */
  registerCollector?(registrar: CollectorRegistrar): void;

  /** Register custom alert providers for the Alert Engine. */
  registerAlertProvider?(registrar: AlertProviderRegistrar): void;

  /** Register notification channel adapters (e.g. PagerDuty, Opsgenie). */
  registerNotificationProvider?(registrar: NotificationProviderRegistrar): void;

  /** Called when the plugin is unloaded. Release resources, cancel timers. */
  dispose(): Promise<void>;
}

// ── Registrar Contracts ────────────────────────────────────────────────────

export interface PluginContext {
  organizationId: string;
  config: Record<string, unknown>;
  logger: PluginLogger;
}

export interface PluginLogger {
  info(message: string, meta?: Record<string, unknown>): void;
  warn(message: string, meta?: Record<string, unknown>): void;
  error(message: string, meta?: Record<string, unknown>): void;
}

export interface RouteRegistrar {
  addRoute(method: 'GET' | 'POST' | 'PUT' | 'DELETE', path: string, handler: unknown): void;
}

export interface TranslatorRegistrar {
  addVendorTranslator(vendorKey: string, translator: unknown): void;
}

export interface PolicyRegistrar {
  addPolicyRule(ruleId: string, evaluator: unknown): void;
}

export interface WorkflowRegistrar {
  addNodeType(nodeTypeId: string, definition: unknown): void;
}

export interface WidgetRegistrar {
  addDashboardWidget(widgetId: string, component: unknown): void;
}

export interface CollectorRegistrar {
  addTelemetryCollector(collectorId: string, collector: unknown): void;
}

export interface AlertProviderRegistrar {
  addAlertProvider(providerId: string, provider: unknown): void;
}

export interface NotificationProviderRegistrar {
  addNotificationChannel(channelId: string, adapter: unknown): void;
}
