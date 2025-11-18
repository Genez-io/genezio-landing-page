export function SupportTerms() {
  return (
    <div className="min-h-screen bg-[#050506]">
      <div className="max-w-4xl mx-auto px-4 md:px-6 pt-32 md:pt-40 pb-20 md:pb-24">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Support Terms
          </h1>
          <p className="text-white/60 text-lg">
            Last modified: November 18, 2025
          </p>
        </div>

        {/* Content */}
        <div className="max-w-none">
          <div className="space-y-10 text-muted-foreground leading-relaxed text-justify">
            <p className="text-justify">
              These support terms, including any attachments or other terms
              referenced herein (together the <strong>“Support Terms”</strong>)
              are subject to, and an integral part of the Software and Services
              Agreement (“SSA”) between Genezio and the Customer as defined in
              the foregoing SSA (“Agreement”). These Support Terms apply to the
              Software for which Genezio received payment of the corresponding
              Fees as per the Agreement. All capitalized terms not otherwise
              defined here will have the meaning specified in the Agreement. The
              Support Terms may be regularly updated by Genezio.
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              1. Definitions
            </h2>
            <ul className="space-y-5">
              <li>
                <strong>“Incident”</strong> means failure of the Software
                components to function in accordance with the specifications in
                the Documentation or the Order (as the case may be), excluding
                issues due to Customer’s misuse, other third-party applications,
                Customer Data, Customer Applications or Third-Party Services, or
                for those caused by Exclusions;
              </li>
              <li>
                <strong>“Downtime for Updates”</strong> means the period of time
                reserved by Genezio to apply, fix and update the Software as
                part of regular maintenance, according to the Genezio’s internal
                policies;
              </li>
              <li>
                <strong>“Service Requests”</strong> means a request from the
                Customer that does not meet the criteria for an Incident, and
                that is limited to information or advice on Software use
                instructions, activation, licensing, etc.;
              </li>
              <li>
                <strong>“Ticket”</strong> means the ticketing system used by
                Genezio to receive requests regarding Incidents and Service
                Requests, which will be communicated to the Customer.
              </li>
            </ul>
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              2. Incident Support
            </h2>
            <p>
              <strong>First Line Support.</strong> Before submitting a Service
              Request, Customer will perform first line support for itself by
              investigating any connectivity, access permission, database
              provisioning or other issues related to its systems, networks or
              applications interacting with the Software.
            </p>
            <p>
              <strong>Incident Support.</strong> During the Subscription Term,
              Genezio will provide support and maintenance for Incidents, by
              providing maintenance and technical support as follows.
            </p>
            <p>
              Any support or maintenance services exceeding 8 hours/month, as
              well as any optional Services requested by the Customer, will be
              subject to additional charges at the hourly rate specified in the
              applicable Order or at a rate otherwise agreed in writing between
              the Parties.
            </p>
            <p>
              Technical support may include, on a case-by-case basis, depending
              on the Incident, responses to diagnosis and rectification of
              Incidents such as workarounds or fixes.
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              3. Support Exclusions
            </h2>
            <p>
              Unless otherwise mutually agreed in writing, Genezio has no
              obligation to provide support to Customer if or for:
            </p>
            <ol className="list-lower-roman pl-8 space-y-2 mt-4">
              <li>
                the Software components have been changed, modified or damaged
                by the Customer or by anyone other than Genezio without
                Genezio’s consent or knowledge or in breach of the Agreement;
              </li>
              <li>
                the Incident is caused by Customer’s negligence, willful
                misconduct, use of the Software components in breach of the
                Agreements;
              </li>
              <li>
                the Incident is due to a third-party software, Customer Data,
                Customer Applications or by Third-Party Services or by a
                Customer integration; or
              </li>
              <li>
                Customer’s failure to comply with the Documentation, or to
                update the Software as required by Genezio,
              </li>
              <li>Downtime for Updates;</li>
              <li>
                Service Requests, and Incident Tickets made other than through
                the Ticket system (all of the foregoing being herein referred to
                as the “Exclusions”).
              </li>
            </ol>
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              4. Priority Levels
            </h2>
            <p className="mb-3">
              The following support service levels are defined and apply:
            </p>
            <div className="relative w-full overflow-auto">
              <table className="w-full caption-bottom border-2 border-grey-300 ">
                <thead className="[&amp;_tr]:border-b bg-grey-900 text-white">
                  <tr className="border-b transition-colors data-[state=selected]:bg-muted">
                    <th className="h-10 px-2 text-left align-middle font-medium [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-white">
                      Priority Level
                    </th>
                    <th className="h-10 px-2 text-left align-middle font-medium [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-white">
                      Definition
                    </th>
                    <th className="h-10 px-2 text-left align-middle font-medium [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] text-white">
                      Response Time
                    </th>
                  </tr>
                </thead>
                <tbody className="[&amp;_tr:last-child]:border-0">
                  <tr className="border-b transition-colors bg-red-50">
                    <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] font-semibold">
                      1 – Critical error
                    </td>
                    <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                      The Software is not working, and they cannot be used in
                      any way by the Customer.
                    </td>
                    <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] font-semibold">
                      12 hours when the Ticket is submitted during Working
                      Hours*
                    </td>
                  </tr>
                  <tr className="border-b transition-colors ">
                    <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] font-semibold">
                      2 – High
                    </td>
                    <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                      A high-priority error refers to a situation where Software
                      is not fully operational, but can still be used in a
                      limited capacity until the issues are resolved.
                    </td>
                    <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] font-semibold">
                      18 hours when the Ticket is submitted during Working
                      Hours*
                    </td>
                  </tr>
                  <tr className="border-b transition-colors bg-blue-50">
                    <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] font-semibold">
                      3 - Medium
                    </td>
                    <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                      A medium-priority error refers to a situation where the
                      Software is facing minor issues that do not affect its
                      overall functionality and can be deferred until the
                      problems are resolved.
                    </td>
                    <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] font-semibold">
                      24 hours when the Ticket is submitted during Working
                      Hours*
                    </td>
                  </tr>
                  <tr className="border-b transition-colors ">
                    <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] font-semibold">
                      4 - Low
                    </td>
                    <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px]">
                      A low-priority error refers to other Software related
                      Incidents that do not fall under the Critical/High/Medium
                      levels.
                    </td>
                    <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;&gt;[role=checkbox]]:translate-y-[2px] font-semibold">
                      48 hours when the Ticket is submitted during Working
                      Hours*
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-8 ">
              * Genezio will provide Incident support during business days,
              Monday to Friday except national holidays in Romania (“Business
              Days”), between 9:00 and 18:00 EET during Business Days (“Working
              Hours”). The response times elapse only during Working Hours and
              Tickets remain on hold outside of these hours.
              <br />
              <br />
              Official and supported language for submitting Tickets,
              communicating, and providing support is <strong>
                English
              </strong>{" "}
              (if the Customer's registered office is outside Romania) and{" "}
              <strong>Romanian</strong> (for Customers with a registered office
              in Romania). Tickets submitted in other languages will not be
              accepted.
              <br />
              <br />
              The Customer will assess the impact, urgency and the perceived
              Priority Level of an Incident and add these details in the Ticket.
              Genezio will evaluate the Priority Level and confirm or
              recategorize it. Customer must submit Incidents and Service
              Requests to Genezio exclusively via Tickets.
              <br />
              <br />
              Under the response times, Genezio will provide the first response
              to Incidents which will include re-evaluation or confirmation of
              Priority Level. Based on the confirmed Priority Level, Genezio
              will target the first response times noted above. Genezio will
              make commercially reasonable efforts to respond to Service
              Requests, but is not bound by the response times prescribed
              herein.
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              5. Support Cooperation
            </h2>
            <p>
              As a precondition for requesting Support, Customer agrees that it
              and its Users will use reasonable efforts to:
            </p>
            (i) to clearly understand the problem and provide the first line
            support before consulting Genezio; (ii) provide Genezio with
            sufficient information and data for Genezio to adequately address
            the potential problem; (iii) utilize sufficient resources to
            understand the instructions from Genezio in addressing the problem,
            and make reasonable attempts to correct the problem as suggested by
            Genezio.
            <p className="mt-2">
              The Customer acknowledges that the time required for resolution of
              Incidents may vary depending on the specific circumstances of each
              problem, including, without limitation, the nature of the
              Incident, the extent and accuracy of information available about
              the Incident, and the level of Customer’s cooperation and
              responsiveness in providing materials, information, access and
              support reasonably required by Genezio to adequately address the
              potential problem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
