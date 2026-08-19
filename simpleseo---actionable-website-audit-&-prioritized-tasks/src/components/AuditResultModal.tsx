import React, { useEffect } from "react";
import { AuditReport } from "../types";
import { AuditReportView } from "./AuditReportView";

interface AuditResultModalProps {
  report: AuditReport | null;
  isOpen: boolean;
  onClose: () => void;
  onResetAudit: () => void;
}

export const AuditResultModal: React.FC<AuditResultModalProps> = ({
  report,
  isOpen,
  onClose,
  onResetAudit,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !report) return null;

  return (
    <div
      id="audit-modal-backdrop"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-2.5 sm:p-4 animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <AuditReportView
          report={report}
          onClose={onClose}
          onResetAudit={onResetAudit}
          isModal={true}
        />
      </div>
    </div>
  );
};
