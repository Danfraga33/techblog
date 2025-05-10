import { MacroHeader } from "~/components/Members/macro/macro-header";
import { MacroIndicators } from "~/components/Members/macro/macro-indicators";
import { MacroCompositeIndex } from "~/components/Members/macro/macro-composite-index";
import { MacroWeights } from "~/components/Members/macro/macro-weights";
import { MacroFooter } from "~/components/Members/macro/macro-footer";

export default function MacroSignalsPage() {
  return (
    <div className="flex flex-col gap-6">
      <MacroHeader />
      <MacroIndicators />
      <MacroCompositeIndex />
      <MacroWeights />
      <MacroFooter />
    </div>
  );
}
