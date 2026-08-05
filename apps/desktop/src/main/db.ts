import Database from 'better-sqlite3';

export class LocalEncryptedDatabase {
  private db: any;

  constructor(dbPath: string) {
    this.db = new Database(dbPath);
    this.initTables();
  }

  private initTables() {
    this.db.exec(`
      CREATE TABLE IF NOT EXISTS offline_devices (
        id TEXT PRIMARY KEY,
        hostname TEXT NOT NULL,
        ip_address TEXT NOT NULL,
        vendor TEXT NOT NULL,
        os_version TEXT,
        synced_at TEXT DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS queued_change_requests (
        id TEXT PRIMARY KEY,
        device_id TEXT NOT NULL,
        ccm_payload TEXT NOT NULL,
        checksum TEXT NOT NULL,
        status TEXT DEFAULT 'QUEUED_OFFLINE',
        created_at TEXT DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS offline_audit_logs (
        id TEXT PRIMARY KEY,
        action TEXT NOT NULL,
        details TEXT,
        created_at TEXT DEFAULT CURRENT_TIMESTAMP
      );
    `);
  }

  public getOfflineDevices() {
    return this.db.prepare('SELECT * FROM offline_devices').all();
  }

  public queueOfflineChangeRequest(id: string, deviceId: string, ccmPayload: string, checksum: string) {
    const stmt = this.db.prepare(
      'INSERT INTO queued_change_requests (id, device_id, ccm_payload, checksum) VALUES (?, ?, ?, ?)'
    );
    return stmt.run(id, deviceId, ccmPayload, checksum);
  }
}
