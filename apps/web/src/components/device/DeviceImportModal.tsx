import React, { useState } from 'react';

export interface DeviceImportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onImportSuccess: () => void;
}

export const DeviceImportModal: React.FC<DeviceImportModalProps> = ({
  isOpen,
  onClose,
  onImportSuccess,
}) => {
  const [step, setStep] = useState<'upload' | 'preview'>('upload');
  const [format, setFormat] = useState<'csv' | 'json'>('csv');

  if (!isOpen) return null;

  const mockPreviewData = [
    { hostname: 'sw-edge-ber-01', ip: '10.240.5.1', vendor: 'CISCO', model: 'Catalyst 9300', status: 'VALID' },
    { hostname: 'sw-edge-ber-02', ip: '10.240.5.2', vendor: 'ARUBA', model: 'CX 6300', status: 'VALID' },
    { hostname: 'sw-core-fra-01', ip: '10.240.1.1', vendor: 'CISCO', model: 'Catalyst 9500', status: 'CONFLICT (IP Duplicate)' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in duration-150">
      <div className="relative w-full max-w-2xl bg-[#111827] border border-white/10 rounded-xl shadow-2xl overflow-hidden p-6 space-y-5">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div>
            <h3 className="text-lg font-bold text-slate-100">Import Devices</h3>
            <p className="text-xs text-slate-400">Bulk register network hardware via CSV or JSON file</p>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-200 text-lg font-bold">
            &times;
          </button>
        </div>

        {step === 'upload' ? (
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <label className="text-xs text-slate-300 font-semibold">File Format:</label>
              <div className="flex items-center space-x-3 text-xs">
                <label className="flex items-center space-x-1 cursor-pointer">
                  <input
                    type="radio"
                    name="format"
                    checked={format === 'csv'}
                    onChange={() => setFormat('csv')}
                    className="text-blue-600 focus:ring-0"
                  />
                  <span>CSV File (.csv)</span>
                </label>
                <label className="flex items-center space-x-1 cursor-pointer">
                  <input
                    type="radio"
                    name="format"
                    checked={format === 'json'}
                    onChange={() => setFormat('json')}
                    className="text-blue-600 focus:ring-0"
                  />
                  <span>JSON Payload (.json)</span>
                </label>
              </div>
            </div>

            <div className="border-2 border-dashed border-white/10 hover:border-blue-500/50 rounded-xl p-8 text-center space-y-2 bg-[#172033]/50 cursor-pointer transition-colors">
              <div className="text-3xl text-blue-400">📁</div>
              <p className="text-sm font-medium text-slate-200">Drag & drop inventory file here, or click to browse</p>
              <p className="text-xs text-slate-500">Supports Hostname, IP, Vendor, Model, Serial, Location</p>
            </div>

            <div className="flex justify-end space-x-2 pt-2">
              <button onClick={onClose} className="px-4 py-2 text-xs bg-slate-800 text-slate-300 rounded hover:bg-slate-700">
                Cancel
              </button>
              <button
                onClick={() => setStep('preview')}
                className="px-4 py-2 text-xs bg-blue-600 text-white font-semibold rounded hover:bg-blue-700"
              >
                Continue to Preview →
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="text-xs text-slate-300 flex justify-between">
              <span>Previewing 3 Records</span>
              <span className="text-emerald-400 font-semibold">2 Valid, 1 Conflict</span>
            </div>

            <div className="max-h-60 overflow-y-auto border border-white/10 rounded-lg">
              <table className="w-full text-left text-xs text-slate-300">
                <thead className="bg-[#172033] text-slate-400">
                  <tr>
                    <th className="p-2">Hostname</th>
                    <th className="p-2">Management IP</th>
                    <th className="p-2">Vendor</th>
                    <th className="p-2">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {mockPreviewData.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-800/40">
                      <td className="p-2 font-bold">{item.hostname}</td>
                      <td className="p-2 font-mono">{item.ip}</td>
                      <td className="p-2">{item.vendor}</td>
                      <td className="p-2">
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] ${
                            item.status.startsWith('VALID')
                              ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                              : 'bg-red-950 text-red-400 border border-red-800'
                          }`}
                        >
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex justify-between items-center pt-2">
              <button onClick={() => setStep('upload')} className="text-xs text-slate-400 hover:text-slate-200">
                ← Back
              </button>
              <div className="space-x-2">
                <button onClick={onClose} className="px-4 py-2 text-xs bg-slate-800 text-slate-300 rounded">
                  Cancel
                </button>
                <button
                  onClick={() => {
                    onImportSuccess();
                    onClose();
                  }}
                  className="px-4 py-2 text-xs bg-blue-600 text-white font-semibold rounded hover:bg-blue-700"
                >
                  Import 2 Valid Devices
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
