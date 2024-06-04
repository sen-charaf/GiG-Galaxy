"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close

const DialogOverlay = React.forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props} />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef(({ className, children, ...props }, ref) => {
  const [selectedOption, setSelectedOption] = React.useState("");
  const [reportMessage, setReportMessage] = React.useState("");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
    if (e.target.value !== "other") {
      setReportMessage("");
    }
  };

  const handleMessageChange = (e) => {
    setReportMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const reportData = {
      reason: selectedOption,
      message: selectedOption === "other" ? reportMessage : "",
    };
    console.log(reportData);
    // Submit reportData to the server or perform other actions
  };

  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content
        ref={ref}
        className={cn(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-gray-200 bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
          className
        )}
        {...props}
      >
        {children}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Report This Gig</DialogTitle>
            <DialogDescription>
              Let us know why you would like to report this Gig. Your report will be kept anonymous.
            </DialogDescription>
          </DialogHeader>
          <div>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="report"
                value="non-original-content"
                className="radio-input accent-primary"
                checked={selectedOption === "non-original-content"}
                onChange={handleOptionChange}
              />
              <span>Non Original Content</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="report"
                value="inappropriate-gig"
                className="radio-input accent-primary"
                checked={selectedOption === "inappropriate-gig"}
                onChange={handleOptionChange}
              />
              <span>Inappropriate Gig</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="report"
                value="trademark-violations"
                className="radio-input accent-primary"
                checked={selectedOption === "trademark-violations"}
                onChange={handleOptionChange}
              />
              <span>Trademark Violations</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="report"
                value="copyright-violations"
                className="radio-input accent-primary"
                checked={selectedOption === "copyright-violations"}
                onChange={handleOptionChange}
              />
              <span>Copyright Violations</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="report"
                value="other"
                className="radio-input accent-primary"
                checked={selectedOption === "other"}
                onChange={handleOptionChange}
              />
              <span>Other</span>
            </label>
            {selectedOption === "other" && (
              <textarea
                className="w-full mt-2 p-2 border rounded accent-primary"
                placeholder="Please describe the issue..."
                value={reportMessage}
                onChange={handleMessageChange}
              />
            )}
          </div>
          <DialogFooter>
            <button type="submit" className="btn btn-primary bg-primary text-white px-4 py-2 rounded">Send</button>
          </DialogFooter>
        </form>
        <DialogPrimitive.Close
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPortal>
  );
});
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({
  className,
  ...props
}) => (
  <div
    className={cn("flex flex-col space-y-1.5 text-center sm:text-left", className)}
    {...props} />
)
DialogHeader.displayName = "DialogHeader"

const DialogFooter = ({
  className,
  ...props
}) => (
  <div
    className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)}
    {...props} />
)
DialogFooter.displayName = "DialogFooter"

const DialogTitle = React.forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold leading-none tracking-tight", className)}
    {...props} />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props} />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}
