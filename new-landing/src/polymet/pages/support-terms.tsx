import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";

export default function GenezioSupportTerms() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-900 to-blue-950 text-white py-14 px-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight">SUPPORT TERMS</h1>
        </div>

        <ScrollArea className="h-[90vh] p-10 md:p-16">
          <div className="space-y-10 text-gray-800 text-base leading-relaxed">
            <p className="text-justify">
              These support terms, including any attachments or other terms referenced herein
              (together the <strong>“Support Terms”</strong>) are subject to, and an integral part
              of the Software and Services Agreement (“SSA”) between Genezio and the Customer as
              defined in the foregoing SSA (“Agreement”). These Support Terms apply to the Software
              for which Genezio received payment of the corresponding Fees as per the Agreement. All
              capitalized terms not otherwise defined here will have the meaning specified in the
              Agreement. The Support Terms may be regularly updated by Genezio.
            </p>

            <h2 className="text-3xl font-bold text-blue-900 mt-16">1. Definitions</h2>
            <ul className="space-y-5 text-sm">
              <li>
                <strong>“Incident”</strong> means failure of the Software components to function in
                accordance with the specifications in the Documentation or the Order (as the case
                may be), excluding issues due to Customer’s misuse, other third-party applications,
                Customer Data, Customer Applications or Third-Party Services, or for those caused by
                Exclusions;
              </li>
              <li>
                <strong>“Downtime for Updates”</strong> means the period of time reserved by Genezio
                to apply, fix and update the Software as part of regular maintenance, according to
                the Genezio’s internal policies;
              </li>
              <li>
                <strong>“Service Requests”</strong> means a request from the Customer that does not
                meet the criteria for an Incident, and that is limited to information or advice on
                Software use instructions, activation, licensing, etc.;
              </li>
              <li>
                <strong>“Ticket”</strong> means the ticketing system used by Genezio to receive
                requests regarding Incidents and Service Requests, which will be communicated to the
                Customer.
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-blue-900 mt-16">2. Incident Support</h2>
            <p>
              <strong>First Line Support.</strong> Before submitting a Service Request, Customer
              will perform first line support for itself by investigating any connectivity, access
              permission, database provisioning or other issues related to its systems, networks or
              applications interacting with the Software.
            </p>
            <p>
              <strong>Incident Support.</strong> During the Subscription Term, Genezio will provide
              support and maintenance for Incidents, by providing maintenance and technical support
              as follows.
            </p>
            <p>
              Any support or maintenance services exceeding 8 hours/month, as well as any optional
              Services requested by the Customer, will be subject to additional charges at the
              hourly rate specified in the applicable Order or at a rate otherwise agreed in writing
              between the Parties.
            </p>
            <p>
              Technical support may include, on a case-by-case basis, depending on the Incident,
              responses to diagnosis and rectification of Incidents such as workarounds or fixes.
            </p>

            <h2 className="text-3xl font-bold text-blue-900 mt-16">3. Support Exclusions</h2>
            <p>
              Unless otherwise mutually agreed in writing, Genezio has no obligation to provide
              support to Customer if or for:
            </p>
            <ol className="list-lower-roman pl-8 space-y-2 mt-4">
              <li>
                the Software components have been changed, modified or damaged by the Customer or by
                anyone other than Genezio without Genezio’s consent or knowledge or in breach of the
                Agreement;
              </li>
              <li>
                the Incident is caused by Customer’s negligence, willful misconduct, use of the
                Software components in breach of the Agreements;
              </li>
              <li>
                the Incident is due to a third-party software, Customer Data, Customer Applications
                or by Third-Party Services or by a Customer integration; or
              </li>
              <li>
                Customer’s failure to comply with the Documentation, or to update the Software as
                required by Genezio,
              </li>
              <li>Downtime for Updates;</li>
              <li>
                Service Requests, and Incident Tickets made other than through the Ticket system
                (all of the foregoing being herein referred to as the “Exclusions”).
              </li>
            </ol>

            <h2 className="text-3xl font-bold text-blue-900 mt-16">4. Priority Levels</h2>
            <p className="mb-6">The following support service levels are defined and apply:</p>

            <Table className="border-2 border-blue-300 text-sm">
              <TableHeader className="bg-blue-900 text-white">
                <TableRow>
                  <TableHead className="text-white">Priority Level</TableHead>
                  <TableHead className="text-white">Definition</TableHead>
                  <TableHead className="text-white">Response Time</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="bg-red-50">
                  <TableCell className="font-semibold">1 – Critical error</TableCell>
                  <TableCell>
                    The Software is not working, and they cannot be used in any way by the Customer.
                  </TableCell>
                  <TableCell className="font-semibold">
                    12 hours when the Ticket is submitted during Working Hours*
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold">2 – High</TableCell>
                  <TableCell>
                    A high-priority error refers to a situation where Software is not fully
                    operational, but can still be used in a limited capacity until the issues are
                    resolved.
                  </TableCell>
                  <TableCell className="font-semibold">
                    18 hours when the Ticket is submitted during Working Hours*
                  </TableCell>
                </TableRow>
                <TableRow className="bg-blue-50">
                  <TableCell className="font-semibold">3 - Medium</TableCell>
                  <TableCell>
                    A medium-priority error refers to a situation where the Software is facing minor
                    issues that do not affect its overall functionality and can be deferred until
                    the problems are resolved.
                  </TableCell>
                  <TableCell className="font-semibold">
                    24 hours when the Ticket is submitted during Working Hours*
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold">4 - Low</TableCell>
                  <TableCell>
                    A low-priority error refers to other Software related Incidents that do not fall
                    under the Critical/High/Medium levels.
                  </TableCell>
                  <TableCell className="font-semibold">
                    48 hours when the Ticket is submitted during Working Hours*
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>

            <p className="mt-8 text-sm">
              * Genezio will provide Incident support during business days, Monday to Friday except
              national holidays in Romania (“Business Days”), between 9:00 and 18:00 EET during
              Business Days (“Working Hours”). The response times elapse only during Working Hours
              and Tickets remain on hold outside of these hours.
              <br />
              <br />
              Official and supported language for submitting Tickets, communicating, and providing
              support is <strong>English</strong> (if the Customer's registered office is outside
              Romania) and <strong>Romanian</strong> (for Customers with a registered office in
              Romania). Tickets submitted in other languages will not be accepted.
              <br />
              <br />
              The Customer will assess the impact, urgency and the perceived Priority Level of an
              Incident and add these details in the Ticket. Genezio will evaluate the Priority Level
              and confirm or recategorize it. Customer must submit Incidents and Service Requests to
              Genezio exclusively via Tickets.
              <br />
              <br />
              Under the response times, Genezio will provide the first response to Incidents which
              will include re-evaluation or confirmation of Priority Level. Based on the confirmed
              Priority Level, Genezio will target the first response times noted above. Genezio will
              make commercially reasonable efforts to respond to Service Requests, but is not bound
              by the response times prescribed herein.
            </p>

            <h2 className="text-3xl font-bold text-blue-900 mt-16">5. Support Cooperation</h2>
            <p>
              As a precondition for requesting Support, Customer agrees that it and its Users will
              use reasonable efforts to:
            </p>
            <ol className="list-lower-roman pl-8 space-y-3 mt-4">
              <li>
                to clearly understand the problem and provide the first line support before
                consulting Genezio;
              </li>
              <li>
                provide Genezio with sufficient information and data for Genezio to adequately
                address the potential problem;
              </li>
              <li>
                utilize sufficient resources to understand the instructions from Genezio in
                addressing the problem, and make reasonable attempts to correct the problem as
                suggested by Genezio.
              </li>
            </ol>
            <p className="mt-6">
              The Customer acknowledges that the time required for resolution of Incidents may vary
              depending on the specific circumstances of each problem, including, without
              limitation, the nature of the Incident, the extent and accuracy of information
              available about the Incident, and the level of Customer’s cooperation and
              responsiveness in providing materials, information, access and support reasonably
              required by Genezio to adequately address the potential problem.
            </p>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
