"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalEncryptedDatabase = void 0;
const better_sqlite3_1 = __importDefault(require("better-sqlite3"));
class LocalEncryptedDatabase {
    db;
    constructor(dbPath) {
        this.db = new better_sqlite3_1.default(dbPath);
        this.initTables();
    }
    initTables() {
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
    getOfflineDevices() {
        return this.db.prepare('SELECT * FROM offline_devices').all();
    }
    queueOfflineChange(id, deviceId, ccmPayload, checksum) {
        return this.db.prepare('INSERT INTO queued_change_requests (id, device_id, ccm_payload, checksum) VALUES (?, ?, ?, ?)').run(id, deviceId, ccmPayload, checksum);
    }
}
exports.LocalEncryptedDatabase = LocalEncryptedDatabase;
