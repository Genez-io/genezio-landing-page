import { useState, type ReactNode } from "react";
import { ChevronDownIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FaqAccordionItem {
  question: string;
  answer: ReactNode;
}

interface FaqAccordionProps {
  items: FaqAccordionItem[];
  /** Index expanded on first paint. Pass `null` to start fully collapsed. */
  defaultOpenIndex?: number | null;
  /** Used to build unique ids for the question/answer aria wiring. */
  idPrefix: string;
  className?: string;
  itemClassName?: string;
  questionClassName?: string;
  answerClassName?: string;
}

/**
 * FAQ accordion that always keeps the answers in the DOM.
 *
 * The site is prerendered (SSG) and Radix's Accordion unmounts collapsed
 * panels, so the answers were missing from the served HTML and from the
 * rendered text — crawlers and AI extractors only ever saw the questions.
 * Here every answer stays mounted and is merely clipped while collapsed
 * (grid row 0fr + overflow hidden, no `display: none` and no `hidden`
 * attribute), which keeps it in the HTML source and in extracted page text
 * while preserving the collapse interaction.
 */
export function FaqAccordion({
  items,
  defaultOpenIndex = 0,
  idPrefix,
  className,
  itemClassName,
  questionClassName,
  answerClassName,
}: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  return (
    <div className={cn("space-y-4", className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const questionId = `${idPrefix}-question-${index}`;
        const answerId = `${idPrefix}-answer-${index}`;

        return (
          <div key={index} className={itemClassName}>
            <h3 className="m-0">
              <button
                type="button"
                id={questionId}
                aria-expanded={isOpen}
                aria-controls={answerId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className={cn(
                  "flex w-full items-center justify-between gap-4 text-left transition-colors",
                  questionClassName
                )}
              >
                <span>{item.question}</span>
                <ChevronDownIcon
                  aria-hidden="true"
                  className={cn(
                    "h-4 w-4 shrink-0 transition-transform duration-200",
                    isOpen && "rotate-180"
                  )}
                />
              </button>
            </h3>

            <div
              id={answerId}
              role="region"
              aria-labelledby={questionId}
              data-state={isOpen ? "open" : "closed"}
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
              className="grid transition-[grid-template-rows] duration-200 ease-out"
            >
              {/* The clipper carries no padding of its own: with `min-h-0` and
                  `overflow-hidden` its automatic minimum size is 0, so the row
                  really collapses to zero height instead of leaving the
                  answer's bottom padding behind. */}
              <div className="min-h-0 overflow-hidden">
                <div className={answerClassName}>{item.answer}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
