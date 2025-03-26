import { Volume1, Volume2, VolumeX } from "lucide-react";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { usePepperContext } from "@/lib/pepper/PepperContext";

interface ControlPanelProps {
  className?: string;
}

/**
 * Control panel for robot volume and mute controls
 */
export const ControlPanel: React.FC<ControlPanelProps> = ({ className }) => {
  const pepper = usePepperContext();
  const [isMuted, setIsMuted] = useState(false);

  const handleVolumePlus = () => {
    pepper.volPlus();
  };

  const handleVolumeMinus = () => {
    pepper.volMinus();
  };

  const handleMuteToggle = () => {
    if (isMuted) {
      pepper.setUnmute();
    } else {
      pepper.setMute();
    }
    setIsMuted(!isMuted);
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Button
        variant="outline"
        size="icon"
        onClick={handleVolumeMinus}
        aria-label="Decrease volume"
      >
        <Volume1 className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        onClick={handleMuteToggle}
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? (
          <VolumeX className="h-4 w-4" />
        ) : (
          <Volume2 className="h-4 w-4" />
        )}
      </Button>

      <Button
        variant="outline"
        size="icon"
        onClick={handleVolumePlus}
        aria-label="Increase volume"
      >
        <Volume2 className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default ControlPanel;
