import type { ReactNode } from "react";
import { PolymetSEO } from "@/polymet/components/polymet-seo";

const SUB_PROCESSORS = [
  { name: "Amazon AWS", purpose: "Cloud hosting, data storage and processing", location: "EU" },
  { name: "Anthropic", purpose: "General purpose AI", location: "EU" },
  { name: "Azure Open AI", purpose: "General purpose AI", location: "EU" },
  {
    name: "Google Cloud Platform",
    purpose: "Cloud hosting, data storage and processing",
    location: "EU",
  },
  { name: "Google Gemini", purpose: "General purpose AI", location: "EU" },
  { name: "Langfuse", purpose: "AI observability and analytics", location: "EU" },
  { name: "Microsoft Azure", purpose: "Cloud hosting, data storage and processing", location: "EU" },
  { name: "OpenAI", purpose: "General purpose AI", location: "EU" },
  { name: "OVH", purpose: "Cloud hosting and infrastructure services", location: "EU" },
  { name: "Perplexity", purpose: "General purpose AI", location: "EU" },
  { name: "Sentry", purpose: "Application error monitoring", location: "EU" },
  { name: "Slack", purpose: "Internal collaboration", location: "EU" },
  { name: "Upstash", purpose: "Caching and queueing infrastructure", location: "EU" },
  { name: "Vercel", purpose: "Frontend hosting and delivery", location: "EU" },
  { name: "Zoho (ZeptoMail)", purpose: "Delivery and access", location: "EU" },
];

/**
 * The agreement is numbered: sections, clauses, sub-clauses and lettered
 * paragraphs. The label lives in its own column so the numbering stays visible
 * and every level lines up against the same text column, as in the signed PDF.
 */
const LABEL_COLUMNS = "md:grid md:grid-cols-[7rem_1fr] md:gap-x-6";

function Section({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-white/50 mt-20 mb-8 first:mt-0">
      {children}
    </h2>
  );
}

function Clause({ number, title }: { number: string; title: string }) {
  return (
    <h3
      className={`text-lg md:text-xl font-semibold text-white mt-14 mb-6 text-left ${LABEL_COLUMNS}`}
    >
      <span className="block">{number}</span>
      <span className="block">{title}</span>
    </h3>
  );
}

function SubClause({ number, title }: { number: string; title: string }) {
  return (
    <h4 className={`text-base font-semibold text-white mt-10 mb-5 text-left ${LABEL_COLUMNS}`}>
      <span className="block">{number}</span>
      <span className="block">{title}</span>
    </h4>
  );
}

function Item({ label, children }: { label?: string; children: ReactNode }) {
  return (
    <div className={`mb-6 grid grid-cols-[2.25rem_1fr] gap-x-3 ${LABEL_COLUMNS}`}>
      <span className="font-semibold text-white/70 text-left">{label}</span>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

export function DataProcessingAgreement() {
  return (
    <>
      <PolymetSEO
        title="Genezio Data Processing Agreement (DPA) & GDPR Compliance"
        description="Read Genezio's Data Processing Agreement (DPA): our GDPR commitment, data security and protection of your personal data as processor. Contact us."
        canonicalPath="/data-processing-agreement/"
      />
      <div className="min-h-screen bg-[#050506]">
        <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-16 pt-32 md:pt-40 pb-20 md:pb-24">
          {/* Header */}
          <div className="mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Data Processing Agreement
            </h1>
            <p className="text-white/60 text-lg">Last modified: August 18, 2026</p>
          </div>

          {/* Content */}
          <div className="max-w-none">
            <div className="text-muted-foreground leading-relaxed text-justify">
              <div>
                <p className="mb-6">
                  This data processing agreement (“DPA” or “Clauses”) is entered into by and between
                  the Customer and Genezio (as defined in the Software and Services Agreement and/or
                  in the Order (the “Main Agreement”) entered into by the Customer and Genezio both
                  as identified in the Main Agreement (each a “Party” and collectively, the
                  “Parties”) as of the date: (i) the last Party signs this DPA or (ii) the effective
                  date of the Main Agreement or relevant Order, whichever occurs first (“Effective
                  Date”), provided the Applicable Data Protection Legislation requires the signing of
                  a data processing agreement or similar, case in which this DPA becomes an addendum
                  to and forms an integral part of the Main Agreement. By entering into the Main
                  Agreement or by using the Products, Customer agrees to be bound by this DPA
                  whenever the Applicable Data Protection Legislation requires the signing of a data
                  processing agreement or similar. Under this DPA, the Customer shall be the
                  controller and Genezio the processor. Any reference to a “controller” hereunder
                  shall be a reference to the Customer and any reference to a “processor” shall be a
                  reference to Genezio. Terms with capital letter will have the meaning ascribed to
                  them under this DPA and under the Main Agreement.
                </p>
                <p>
                  This DPA is drafted in accordance with and reflects the standards set out in the
                  Annex to Commission Implementing Decision of 04.06.2021 on standard contractual
                  clauses between controllers and processors under Article 28 (7) of Regulation (EU)
                  2016/679 of the European Parliament and of the Council (the “Standard Contractual
                  Clauses”). European Commission’s Standard Contractual Clauses (SCCs) are
                  standardised and pre-approved model data protection clauses that allow controllers
                  and processors to comply with their obligations under EU data protection law and
                  they reflect the highest standard of data protection. The SCCs are compliant with
                  other data protection laws so this DPA will apply as long as the applicable data
                  protection laws require one.
                </p>

                <Section>Section 1. General provisions</Section>

                <Clause number="Clause 1." title="Purpose and scope" />
                <Item label="(a)">
                  <p>
                    The purpose of this DPA is to ensure compliance with the Applicable Data
                    Protection Legislation. <strong>“Applicable Data Protection Legislation”</strong>{" "}
                    means where applicable, Regulation (EU) 2016/679 regarding the Personal Data
                    Protection (<strong>“GDPR”</strong>) and any other applicable law which governs the
                    agreements between the Parties in the field of data protection and which require
                    the signing of a data protection agreement (such as the UK Data Protection Act
                    2018).
                  </p>
                </Item>
                <Item label="(b)">
                  <p>
                    The controllers and processors listed in Annex I have agreed to this DPA in order
                    to ensure compliance with the Applicable Data Protection Legislation.
                  </p>
                </Item>
                <Item label="(c)">
                  <p>The DPA applies to the processing of personal data as specified in Annex II.</p>
                </Item>
                <Item label="(d)">
                  <p>Annexes I to IV are an integral part of the DPA.</p>
                </Item>
                <Item label="(e)">
                  <p>
                    This DPA does not affect the obligations to which the controller is subject by
                    virtue of the Applicable Data Protection Legislation.
                  </p>
                </Item>

                <Clause number="Clause 2." title="Interpretation" />
                <Item label="(a)">
                  <p>
                    Where this DPA uses the terms defined in the Applicable Data Protection
                    Legislation, those terms shall have the same meaning as thereinunder.
                  </p>
                </Item>
                <Item label="(b)">
                  <p>
                    This DPA shall be read and interpreted in the light of the provisions of the
                    Applicable Data Protection Legislation. This DPA forms an integral part of the
                    Main Agreement and, in case of conflict, Clause 3 (Hierarchy) shall apply.
                  </p>
                </Item>

                <Clause number="Clause 3." title="Hierarchy" />
                <Item>
                  <p>
                    In the event of a contradiction between these Clauses and the provisions of
                    related agreements between the Parties existing at the time when these Clauses are
                    agreed or entered into thereafter, the Clauses shall prevail.
                  </p>
                </Item>

                <Clause number="Clause 4." title="Docking clause" />
                <Item label="(a)">
                  <p>
                    Any entity that is not a Party to the DPA may, with the agreement of all the
                    Parties, accede to these Clauses at any time as a controller or a processor by
                    completing the Annexes and signing Annex I.
                  </p>
                </Item>
                <Item label="(b)">
                  <p>
                    Once the Annexes in (a) are completed and signed, the acceding entity shall be
                    treated as a Party to these Clauses and have the rights and obligations of a
                    controller or a processor, in accordance with its designation in Annex I.
                  </p>
                </Item>
                <Item label="(c)">
                  <p>
                    The acceding entity shall have no rights or obligations resulting from these
                    Clauses from the period prior to becoming a Party.
                  </p>
                </Item>

                <Section>Section 2. Obligations of the Parties</Section>

                <Clause number="Clause 5." title="Description of processing(s)" />
                <Item>
                  <p>
                    The details of the processing operations, in particular the categories of personal
                    data and the purposes of processing for which the personal data is processed on
                    behalf of the controller, are specified in Annex II.
                  </p>
                </Item>

                <Clause number="Clause 6." title="Obligations of the Parties" />

                <SubClause number="6.1" title="Instructions" />
                <Item label="(a)">
                  <p>
                    The processor shall process personal data only on documented instructions from
                    the controller, unless required to do so by the Applicable Data Protection Legislation
                    to which the processor is subject, including those provided in the Annexes
                    hereunder. In this case, the processor shall inform the controller of that legal
                    requirement before processing, unless the law prohibits this on important grounds
                    of public interest. Subsequent instructions may also be given by the controller
                    throughout the duration of the processing of personal data. These instructions
                    shall always be documented.
                  </p>
                </Item>
                <Item label="(b)">
                  <p>
                    The processor shall promptly inform the controller if, in the processor’s opinion,
                    instructions given by the controller infringe the Applicable Data Protection
                    Legislation provisions.
                  </p>
                </Item>

                <SubClause number="6.2" title="Purpose limitation" />
                <Item>
                  <p>
                    The processor shall process the personal data only for the specific purpose(s) of
                    the processing, as set out in Annex II, unless it receives further instructions
                    from the controller.
                  </p>
                </Item>

                <SubClause number="6.3" title="Duration of the processing of personal data" />
                <Item>
                  <p>
                    Processing by the processor shall only take place for the duration specified in
                    Annex II.
                  </p>
                </Item>

                <SubClause number="6.4" title="Security of processing" />
                <Item label="(a)">
                  <p>
                    The processor shall at least implement the technical and organisational measures
                    specified in Annex III to ensure the security of the personal data. This includes
                    protecting the data against a breach of security leading to accidental or unlawful
                    destruction, loss, alteration, unauthorised disclosure or access to the data
                    (personal data breach). In assessing the appropriate level of security, the Parties
                    shall take due account of the state of the art, the costs of implementation, the
                    nature, scope, context and purposes of processing and the risks involved for the
                    data subjects.
                  </p>
                </Item>
                <Item label="(b)">
                  <p>
                    The processor shall grant access to the personal data undergoing processing to
                    members of its personnel only to the extent strictly necessary for implementing,
                    managing and monitoring of the contract. The processor shall ensure that persons
                    authorised to process the personal data received have committed themselves to
                    confidentiality or are under an appropriate statutory obligation of
                    confidentiality.
                  </p>
                </Item>

                <SubClause number="6.5" title="Sensitive data" />
                <Item>
                  <p>
                    If the processing involves personal data revealing racial or ethnic origin,
                    political opinions, religious or philosophical beliefs, or trade union membership,
                    genetic data or biometric data for the purpose of uniquely identifying a natural
                    person, data concerning health or a person’s sex life or sexual orientation, or
                    data relating to criminal convictions and offences (“sensitive data”), the
                    processor shall apply specific restrictions and/or additional safeguards.
                  </p>
                </Item>

                <SubClause number="6.6" title="Documentation and compliance" />
                <Item label="(a)">
                  <p>The Parties shall be able to demonstrate compliance with these Clauses.</p>
                </Item>
                <Item label="(b)">
                  <p>
                    The processor shall deal with inquiries from the controller about the processing of
                    data in accordance with these Clauses.
                  </p>
                </Item>
                <Item label="(c)">
                  <p>
                    The processor shall make available to the controller reasonable information
                    necessary to demonstrate compliance with the obligations that are set out in these
                    Clauses and stem directly from the Applicable Data Protection Legislation, subject
                    to confidentiality obligations. At the controller’s request, the processor shall
                    permit and contribute to one audit per year regarding the processing of the
                    activities covered by these Clauses, during business hours and subject to the
                    Customer’s payment of the relevant costs. Additional audits may only be requested
                    where required by the Applicable Data Protection Legislation, such as in the event
                    of indications of non-compliance or at the instruction of a supervisory authority.
                    In deciding on whether to exercise its audit right, the controller may take into
                    account relevant certifications held by the processor. All costs incurred by the
                    processor in connection with the audit will be borne by the controller. The
                    controller may only mandate an independent auditor. Audits shall be carried out
                    only with reasonable notice but no less than 72 hours and be subject to
                    confidentiality obligations.
                  </p>
                </Item>
                <Item label="(d)">
                  <p>
                    The Parties shall make the information referred to in this DPA, including the
                    results of any audits, available to the competent supervisory authority/ies on
                    request.
                  </p>
                </Item>

                <SubClause number="6.7" title="Use of sub-processors" />
                <Item label="(a)">
                  <p>
                    <strong>GENERAL WRITTEN AUTHORISATION:</strong> The processor has the controller’s
                    general authorisation for the engagement of sub-processors from an agreed list
                    provided in the Annexes hereunder as amended from time to time in accordance with
                    this Clause 6.7(a). The processor shall inform in writing the controller of any
                    intended changes of that list through the addition or replacement of sub-processors
                    at least 15 business days in advance, thereby giving the controller sufficient time
                    to be able to object to such changes prior to the engagement of the concerned
                    sub-processor(s). The processor shall provide the controller with the information
                    necessary to enable the controller to exercise the right to object. If processor
                    does not receive a written notice of objection and termination in accordance with
                    this section, it will be deemed in good faith that the controller has accepted the
                    change in sub-processors. If the Customer does not agree with any new
                    sub-processor, it has the sole right to immediately terminate the Main Agreement
                    and the DPA.
                  </p>
                </Item>

                <SubClause number="6.8" title="International transfers" />
                <Item label="(a)">
                  <p>
                    If the Applicable Data Protection Legislation so requires, any transfer of data to
                    a third country or an international organisation by the processor shall be done
                    only on the basis of documented instructions from the controller or in order to
                    fulfil a specific requirement under the Applicable Data Protection Legislation to
                    which the processor is subject and shall take place in compliance with the
                    Applicable Data Protection Legislation.
                  </p>
                </Item>
                <Item label="(b)">
                  <p>
                    The controller agrees that where the processor engages a sub-processor in
                    accordance with Clause 6.7. for carrying out specific processing activities (on
                    behalf of the controller) and those processing activities involve a transfer of
                    personal data, the processor and the sub-processor can ensure compliance with the
                    Applicable Data Protection Legislation and are hereby authorized to transfer the
                    controller’s personal data to third-countries by using standard contractual clauses
                    adopted by the Commission in accordance with of Article 46(2) of Regulation (EU)
                    2016/679 provided the conditions for the use of those standard contractual clauses
                    are met, or adequacy decisions.
                  </p>
                </Item>

                <Clause number="Clause 7." title="Assistance to the controller" />
                <Item label="(a)">
                  <p>
                    The processor shall notify the controller of any request it has received from the
                    data subject. It shall not respond to the request itself, unless authorised to do
                    so by the controller.
                  </p>
                </Item>
                <Item label="(b)">
                  <p>
                    At controller’s cost, the processor shall provide reasonable assistance, to the
                    extent technically feasible and proportionate, in fulfilling its obligations to
                    respond to data subjects’ requests to exercise their rights, taking into account
                    the nature of the processing and the information available to the processor.
                  </p>
                </Item>
                <Item label="(c)">
                  <p>
                    In addition to the processor’s obligation to assist the controller pursuant to
                    Clause 7 (b), the processor shall assist the controller in ensuring compliance with
                    the other obligations for which the Applicable Data Protection Legislation provide
                    for processor’s contribution and assistance.
                  </p>
                </Item>
                <Item label="(d)">
                  <p>
                    The Parties shall set out in Annex III the appropriate technical and organisational
                    measures by which the processor is required to assist the controller in the
                    application of this Clause as well as the scope and the extent of the assistance
                    required.
                  </p>
                </Item>

                <Clause number="Clause 8." title="Notification of personal data breach" />
                <Item>
                  <p>
                    In the event of a personal data breach, the processor shall cooperate and provide
                    reasonable assistance, taking into account the nature of processing and the
                    information available to the processor, and assist the controller for the
                    controller to comply with its obligations under the Applicable Data Protection
                    Legislation, where applicable, taking into account the nature of processing and the
                    information available to the processor.
                  </p>
                </Item>

                <SubClause number="8.1" title="Data breach concerning data processed by the controller" />
                <Item>
                  <p>
                    In the event of a personal data breach concerning data processed by the controller
                    and the processor, the processor shall reasonably assist the controller, if the
                    following are under processor’s control or knowledge:
                  </p>
                </Item>
                <Item label="(a)">
                  <p>
                    in notifying the personal data breach to the competent supervisory authority/ies,
                    without undue delay and in any event within 24 hours after the controller has
                    become aware of it, where relevant/(unless the personal data breach is unlikely to
                    result in a risk to the rights and freedoms of natural persons);
                  </p>
                </Item>
                <Item label="(b)">
                  <p>
                    in obtaining the information which, pursuant to Article 33(3) of the GDPR and any
                    other Applicable Data Protection Legislation, must be stated in the
                    controller’s notification;
                  </p>
                </Item>
                <Item label="(c)">
                  <p>
                    in complying, pursuant to the Applicable Data Protection Legislation and when
                    expressly provided thereunder, with the obligation to communicate without undue
                    delay the personal data breach to the data subject, when the personal data breach
                    is likely to result in a high risk to the rights and freedoms of natural persons.
                  </p>
                </Item>

                <SubClause number="8.2" title="Data breach concerning data processed by the processor" />
                <Item>
                  <p>
                    In the event of a personal data breach concerning data processed by the processor,
                    the processor shall notify the controller without undue delay after the processor
                    having become aware of the breach. Such notification shall contain, at least:
                  </p>
                </Item>
                <Item label="(a)">
                  <p>a description of the nature of the breach;</p>
                </Item>
                <Item label="(b)">
                  <p>
                    the details of a contact point where more information concerning the personal data
                    breach can be obtained;
                  </p>
                </Item>
                <Item label="(c)">
                  <p>
                    its likely consequences and the measures taken or proposed to be taken to address
                    the breach, including to mitigate its possible adverse effects.
                  </p>
                </Item>
                <Item>
                  <p>
                    Where, and insofar as, it is not possible to provide all this information at the
                    same time, the initial notification shall contain the information then available
                    and further information shall, as it becomes available, subsequently be provided
                    without undue delay.
                  </p>
                  <p>
                    The Parties shall set out in Annex III all other elements to be provided by the
                    processor when assisting the controller in the compliance with the controller’s
                    obligations under the Applicable Data Protection Legislation.
                  </p>
                </Item>

                <Section>Section 3. Final provisions</Section>

                <Clause
                  number="Clause 9."
                  title="Non-compliance with the Clauses, termination and amendments"
                />
                <Item label="(a)">
                  <p>
                    Without prejudice to any provisions of the Applicable Data Protection Legislation,
                    in the event that the processor is in breach of its obligations under these
                    Clauses, the controller may instruct the processor to suspend the processing of
                    personal data until the latter complies with these Clauses or the contract is
                    terminated. The processor shall promptly inform the controller in case it is unable
                    to comply with these Clauses, for whatever reason.
                  </p>
                </Item>
                <Item label="(b)">
                  <p>
                    This DPA may be terminated by the either Party upon written notice with immediate
                    effect, in case of the other Party’s material breach of the DPA and/or as provided
                    under the Applicable Data Protection Legislation. This Agreement will terminate
                    immediately upon termination of the Main Agreement. Customer understands and
                    accepts that upon termination of this DPA, the Products functionalities may be
                    impacted.
                  </p>
                </Item>
                <Item label="(c)">
                  <p>
                    Unless otherwise agreed between the Parties in, or in accordance with, the Main
                    Agreement, termination of this DPA will not cause the immediate termination of the
                    Main Agreement.
                  </p>
                </Item>
                <Item label="(d)">
                  <p>
                    This DPA may be amended by Genezio, however, the DPA version applicable to
                    Customer’s Products are those in effect at the time of Subscription Term renewal,
                    purchase, or license acquisition and will not change during the respective
                    subscription term, except that for new features, offerings, supplements, or related
                    software, new or additional DPA terms may apply.
                  </p>
                </Item>
                <Item label="(e)">
                  <p>
                    <strong>Deletion or return of personal data.</strong> Upon termination or expiry of
                    the Main Agreement, and at the choice of the controller notified to the processor
                    in writing, the processor shall delete or return to the controller all personal
                    data processed on behalf of the controller, and shall delete existing copies,
                    within 60 days of such termination or expiry, unless retention is required by the
                    Applicable Data Protection Legislation or other applicable law, in which case the
                    processor shall inform the controller of that requirement. Where no choice is
                    notified within 60 days of termination or expiry, the processor shall delete the
                    personal data. Deletion from backups takes place in accordance with the backup
                    retention cycle described in Annex III. Upon the controller’s written request, the
                    processor shall provide written confirmation of deletion.
                  </p>
                </Item>
                <div
                  data-orientation="horizontal"
                  role="none"
                  className="shrink-0 bg-border h-[1px] w-full my-20 border-2"
                ></div>
                <div className="space-y-8">
                  <h2 className="text-xl font-bold text-white">ANNEX I: LIST OF PARTIES</h2>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="p-6 rounded-lg border">
                      <h3 className="font-semibold text-lg mb-4">CONTROLLER</h3>
                      <p>
                        <strong>CUSTOMER:</strong>
                      </p>
                      <p className="mt-2">as defined in the Main Agreement</p>
                      <p className="mt-4">
                        <strong>Contact person’s name:</strong>
                      </p>
                      <p className="mt-1">
                        the controller’s contact is identified in the Main Agreement as the person
                        signing the Main Agreement
                      </p>
                    </div>
                    <div className="p-6 rounded-lg border">
                      <h3 className="font-semibold text-lg mb-4">PROCESSOR</h3>
                      <p>
                        <strong>Genezio:</strong>
                      </p>
                      <p className="mt-2">as defined in the Main Agreement</p>
                      <p className="mt-4">
                        <strong>Contact person’s name:</strong>
                      </p>
                      <p className="mt-1">
                        the processor’s contact is Iulia Trandafir; Chief Operating Officer;
                        e-mail: iulia@genezio.com
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-8">
                  <h2 className="text-xl font-bold text-white mt-4">
                    ANNEX II: DESCRIPTION OF THE PROCESSING
                  </h2>
                  <div className="p-6 rounded-lg border space-y-6">
                    <p>
                      <strong>
                        Processor shall process the personal data received from the controller in
                        accordance with the details below:
                      </strong>
                    </p>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <p className="font-semibold">
                          Categories of data subjects whose personal data is processed
                        </p>
                        <p className="mt-2">
                          Individuals whose personal data is provided by the controller to the
                          processor by using the Products under the Main Agreement or for the
                          performance of the Main Agreement, and the categories of the data
                          subject(s) whose personal data the controller decides to be processed
                          through the Products, including without limitation Customer’s (potential)
                          clients, partners, employees, agents, etc.
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold">Categories of personal data processed</p>
                        <p className="mt-2">
                          The Controller determines the categories of data for each Service used
                          under the Main Agreement. These typically include: account data relating
                          to the Controller’s authorised users, such as name, business e-mail address
                          and organisation.
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold">
                        Sensitive data processed (if applicable) and applied restrictions or
                        safeguards that fully take into consideration the nature of the data and the
                        risks involved, such as for instance strict purpose limitation, access
                        restrictions (including access only for staff having followed specialised
                        training), keeping a record of access to the data, restrictions for onward
                        transfers or additional security measures.
                      </p>
                      <p className="mt-2">
                        The Products are not intended for the processing of sensitive data. The
                        Controller undertakes not to submit sensitive data through the Products, in
                        particular through free-text fields, and acknowledges that it does so at its
                        own risk. Should sensitive data nevertheless be submitted, the processor
                        shall apply the technical and organisational measures set out in Annex III.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <p className="font-semibold">Nature of the processing</p>
                        <p className="mt-2">
                          Includes, without limitation: storage, computer processing and/or
                          deletion, as required for the execution of controller’s instructions in
                          accordance with the Main Agreement, including, without limitation for the
                          purposes of providing professional services, support, back-up,
                          restoration, security and monitoring.
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold">
                          Purpose(s) for which the personal data is processed on behalf of the
                          controller
                        </p>
                        <p className="mt-2">
                          Performance of the Main Agreement concluded between the Parties and the
                          provisions and use of the Products. The processor does not use personal
                          data processed on behalf of the controller to train, fine-tune or otherwise
                          develop or improve any artificial intelligence or machine learning models,
                          whether its own or those of any sub-processor.
                        </p>
                        <p className="mt-2">
                          The controller personal data will also be processed in order to send
                          (electronic) communications to the users, according with the Products’
                          functionalities and features and for the purposes provided in the Genezio
                          Privacy Policy available online.
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <p className="font-semibold">Duration of the processing</p>
                        <p className="mt-2">
                          Upon termination of the Main Agreement, personal data is deleted or
                          returned in accordance with Clause 9 (e) above.
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold">
                          For processing by (sub-)processors, also specify subject matter, nature
                          and duration of the processing.
                        </p>
                        <p className="mt-2">Provided in Annex IV.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-8">
                  <h2 className="text-xl font-bold text-white mt-4">
                    ANNEX III: TECHNICAL AND ORGANISATIONAL MEASURES INCLUDING TECHNICAL AND
                    ORGANISATIONAL MEASURES TO ENSURE THE SECURITY OF THE DATA
                  </h2>
                  <div className="p-6 rounded-lg border space-y-6">
                    <div>
                      <h4 className="font-semibold">
                        1. Technical and organisational measures implemented by the processor
                      </h4>
                      <ul className="list-disc pl-6 mt-4 space-y-2">
                        <li>
                          Processor has implemented an IT security policy that addresses:
                          <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>Data integrity and confidentiality;</li>
                            <li>Security of IT equipment;</li>
                            <li>Protection against viruses, trojans, malware;</li>
                            <li>Security measures regarding databases;</li>
                          </ul>
                        </li>
                        <li>Processor uses commercially reputed cloud-services suppliers.</li>
                        <li>
                          Processor has implemented firewall technologies to limit security risks.
                        </li>
                        <li>
                          Processor ensures the secure transmission of personal data inside or
                          outside the internal network using encryption technologies.
                        </li>
                        <li>
                          Processor ensures that only those employees who need to carry out a
                          processing of personal data are authorized to do so. The authorization for
                          access to the information systems containing personal data will be granted
                          according to the principles of "need to know" and "minimum privileges".
                        </li>
                        <li>
                          Processor has established through the IT security requirements for strong
                          passwords.
                        </li>
                        <li>Processor has rules for analysing and reporting security breaches.</li>
                        <li>
                          Processor maintains centralised logging and monitoring of its production
                          environment, and retains audit logs for security investigation purposes.
                        </li>
                        <li>
                          Processor performs regular vulnerability scanning and annual penetration
                          testing, and remediates identified findings according to documented
                          severity levels.
                        </li>
                        <li>
                          Processor maintains a documented business continuity and disaster recovery
                          plan, which is reviewed and tested at least annually.
                        </li>
                        <li>
                          Processor carries out background verification of personnel where permitted
                          by applicable law, requires all personnel to sign confidentiality
                          undertakings, and delivers security awareness training upon hire and at
                          least annually thereafter.
                        </li>
                        <li>
                          Processor maintains a certified information security management system in
                          accordance with ISO/IEC 27001:2022, and undergoes an annual SOC 2 Type II
                          examination. Current certificates and reports are made available to the
                          controller upon request, subject to confidentiality obligations, via the
                          processor’s Trust Center at{" "}
                          <a
                            href="https://trust.genezio.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white underline underline-offset-4 hover:text-white/80"
                          >
                            https://trust.genezio.com
                          </a>
                          .
                        </li>
                        <li>
                          <strong>Backups and data recovery:</strong> all data is backed up daily;
                          backups are encrypted at rest and retained for 7 days, after which they
                          expire automatically. Personal data deleted at the controller’s request is
                          removed from production systems within 7 days. Deleted data may persist in
                          encrypted backups until those backups expire in the normal retention
                          cycle, as backups cannot be selectively modified without compromising their
                          integrity. Expired backups are permanently and irreversibly deleted.
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold">
                        2. Description of the specific technical and organisational measures to
                        be taken by the processor to be able to provide assistance to the controller:
                      </h4>
                      <p className="mt-4">
                        Processor has implemented the technical and organisational measures
                        described in Section 1. Technical and organisational measures implemented by
                        the processor, of this Annex III.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold">
                        3. For transfers to (sub-)processors, also describe the specific technical
                        and organisational measures to be taken by the (sub-)processor to be able to
                        provide assistance to the controller:
                      </h4>
                      <p className="mt-4">
                        Sub-processors are required, whenever possible and negotiable, under the
                        applicable data processing agreements with processor to implement adequate
                        technical and organisational measures to be able to provide assistance to
                        the controller.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-8">
                  <h2 className="text-xl font-bold text-white mt-4">
                    ANNEX IV: LIST OF SUB-PROCESSORS
                  </h2>
                  <p className="mb-6">
                    Processor uses sub-processors to provide its products and to perform the
                    relevant business operations under the Main Agreement. Sub-processors engaged by
                    Genezio to provide services are made available or identified upon Customer’s
                    request or in the relevant Order for professional services. The following list
                    of sub-processors is mandatory for Genezio to operate its services:
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse border border-white/10">
                      <thead>
                        <tr className="bg-white/5">
                          <th className="p-4 border border-white/10 text-white font-semibold">
                            Sub-processor
                          </th>
                          <th className="p-4 border border-white/10 text-white font-semibold">
                            Purpose
                          </th>
                          <th className="p-4 border border-white/10 text-white font-semibold">
                            Storage location
                          </th>
                          <th className="p-4 border border-white/10 text-white font-semibold">
                            Duration of processing
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/10">
                        {SUB_PROCESSORS.map((subProcessor) => (
                          <tr key={subProcessor.name}>
                            <td className="p-4 border border-white/10 align-top whitespace-nowrap">
                              {subProcessor.name}
                            </td>
                            <td className="p-4 border border-white/10 align-top">
                              {subProcessor.purpose}
                            </td>
                            <td className="p-4 border border-white/10 align-top">
                              {subProcessor.location}
                            </td>
                            <td className="p-4 border border-white/10 align-top">
                              As required under the Main Agreement, unless otherwise required by the
                              law or by sub-processor’s binding rules
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
