import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { BrandPresencePricingSection } from "./brand-presence-pricing-section";

const STORAGE_KEY = "brandPopupDismissed";

const BrandPopup = () => {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    // Check if dismissed before
    const dismissed = localStorage.getItem(STORAGE_KEY);

    if (!dismissed) {
      const timer = setTimeout(() => {
        setOpen(true);
      }, 3000); // open after 3 seconds

      return () => clearTimeout(timer);
    }
  }, []);

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);

    if (!isOpen) {
      // Save dismissal to localStorage
      localStorage.setItem(STORAGE_KEY, "true");
    }
  };

  return (
    <Dialog.Root open={open} onOpenChange={handleOpenChange}>
      <Dialog.Portal>
        {/* Overlay */}
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999]" />

        {/* Content */}
        <Dialog.Content className="fixed inset-0 w-full h-full rounded-none p-2 shadow-xl focus:outline-none overflow-x-auto z-[9999]">
          <div className="flex items-center justify-end mb-4 sticky top-0 z-10">
            <Dialog.Close asChild>
              <button className="rounded-full p-1 hover:bg-gray-100">
                <X className="h-5 w-5" />
              </button>
            </Dialog.Close>
          </div>

          <BrandPresencePricingSection />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default BrandPopup;
