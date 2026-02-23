import { Helmet } from "react-helmet";

export function PrivacyPolicy() {
    return (
        <>
            {import.meta.env.SSR && (
              <Helmet>
                <title>Genezio Privacy Policy - Official Legal Agreement</title>
                <meta
                    name="description"
                    content="Review Genezio's Privacy Policy. Understand how we collect, use, and protect your personal data."
                />
              </Helmet>
            )}
            <div className="min-h-screen bg-[#050506]">
                <div className="max-w-4xl mx-auto px-4 md:px-6 pt-32 md:pt-40 pb-20 md:pb-24">
                    {/* Header */}
                    <div className="mb-12 md:mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
                        <p className="text-white/60 text-lg">Last updated: December 1, 2025</p>
                    </div>

                    {/* Content */}
                    <div className="max-w-none">
                        <div className="space-y-10 text-muted-foreground leading-relaxed text-justify">
                            <section>
                                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">INTRODUCTION</h2>
                                <div className="space-y-4">
                                    <p>
                                        This Privacy Policy (the &ldquo;Policy&rdquo;) describes the practices of Genezio
                                        SRL with is registered office at Bucharest, 1st District, 12. Lt. D. Darian
                                        Street (hereinafter &ldquo;Genezio&rdquo;, &ldquo;we&rdquo; or &ldquo;us&rdquo;)
                                        with respect to the Personal Information collected, stored, used, transferred,
                                        shared and otherwise processed from data subjects when and to the extent Genezio
                                        is a controller of such data subjects (&ldquo;you&rdquo;).
                                    </p>
                                    <p>
                                        &ldquo;Personal Information&rdquo; means, as applicable, information related to
                                        an identified or identifiable natural person as defined by Regulation (EU)
                                        2016/679 (&ldquo;GDPR&rdquo;).
                                    </p>
                                    <p>
                                        This Policy sets forth your rights and remedies under the GDPR, so please read
                                        it carefully.
                                    </p>
                                    <p>
                                        This Privacy Policy does not apply to the extent we process Personal Data in the
                                        role of a processor on behalf of our customers, including where we offer to our
                                        customers various products and services through which our customers (or their
                                        affiliates collect), use, share or process Personal Data.
                                    </p>
                                    <p>
                                        For detailed privacy information related to a Genezio customer or a customer
                                        affiliate who uses Genezio products and services as the controller, please
                                        contact our customer directly. We are not responsible for the privacy or data
                                        security practices of our customers, which may differ from those explained in
                                        this Privacy Policy.
                                    </p>
                                    <p>
                                        For questions or requests regarding the Policy and the exercise of any of your
                                        rights hereunder or under the Law, please do not hesitate to contact us by
                                        e-mail at privacy@genezio.com.
                                    </p>
                                    <p className="font-semibold text-white mt-6">
                                        THE POLICY DESCRIBES, AMONG OTHERS:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>what Personal Information we collect and process;</li>
                                        <li>
                                            the purposes for which we collect and use your Personal Information;
                                        </li>
                                        <li>the grounds on which the processing is carried out;</li>
                                        <li>general information on retention periods;</li>
                                        <li>your rights and how to exercise them;</li>
                                        <li>to whom we may disclose your Personal Information;</li>
                                        <li>
                                            the countries to which we may transfer your Personal Information;
                                        </li>
                                    </ul>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                                    PROCESSING ACTIVITIES
                                </h2>
                                <div className="space-y-4">
                                    <p>
                                        This Privacy Policy applies to the processing of Personal Data collected by
                                        Genezio when you:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Visit our websites;</li>
                                        <li>Visit our branded social media pages;</li>
                                        <li>Visit our offices;</li>
                                        <li>
                                            Receive communications from us or otherwise communicate with us, including but
                                            not limited to emails, phone calls, texts or faxes;
                                        </li>
                                        <li>
                                            Use our webistes, products and services (&ldquo;Services&rdquo;) where we act
                                            as a controller of your Personal Data;
                                        </li>
                                        <li>
                                            Register for, attend or take part in our events, webinars, programs,
                                            trainings, certifications or contests;
                                        </li>
                                        <li>
                                            Act as or work for a service provider or supplier to Genezio, to the extent
                                            Genezio acts as a controller with respect to your Personal Data;
                                        </li>
                                        <li>Respond to or apply to hiring or collaboration announceents; or</li>
                                        <li>
                                            Participate in surveys, research or other similar data collection facilitated
                                            by us;
                                        </li>
                                    </ul>
                                    <p>
                                        We process, as controller, Personal Information we receive from third-parties,
                                        inclusing our customers.
                                    </p>
                                    <p>
                                        In relation to the foregoing, we may process the following data: name; email
                                        address; phone number; postal address (including billing name/address); country;
                                        job title/occupation; company name; arrival date and time (event attendance
                                        logistics); photos; video recordings; voice recordings; biometric information
                                        (facial image/facial features used for identification, where you explicitly
                                        consent and only for specified events); financial/payment information (e.g.,
                                        credit card number, bank account information, billing details); online
                                        identifiers and device/network data (e.g., IP address and similar identifiers);
                                        website/email interaction data collected via cookies, web beacons, and similar
                                        technologies (usage/engagement data); service usage data collected via log files
                                        and similar technologies (usage data); social media profiles or usernames; areas
                                        of expertise and interests; health and other type of required information for
                                        employment purposes as required by the law; and any other personal data you
                                        voluntarily provide.
                                    </p>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                                    PURPOSE AND BASIS OF PROCESSING
                                </h2>
                                <p className="mb-6">We process Personal Information for these non-limited purposes:</p>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left border-collapse border border-white/10">
                                        <thead>
                                            <tr className="bg-white/5">
                                                <th className="p-4 border border-white/10 text-white font-semibold w-1/2">
                                                    Purpose of processing
                                                </th>
                                                <th className="p-4 border border-white/10 text-white font-semibold w-1/2">
                                                    Legal basis for the purpose of processing
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-white/10">
                                            <tr>
                                                <td className="p-4 border border-white/10 align-top">
                                                    To provide, maintain and facilitate the Service to you, to support the Service functions and your use of the Service
                                                </td>
                                                <td className="p-4 border border-white/10 align-top">
                                                    Contract, Legitimate interest, Consent
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 border border-white/10 align-top">
                                                    To improve or customize the Service or other offerings (testing, research, internal analytics and product development)
                                                </td>
                                                <td className="p-4 border border-white/10 align-top">
                                                    Contract, Legitimate Interest, Consent
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 border border-white/10 align-top">
                                                    For making our recommendations and promotional communications to you, for example through emails, including for third-party products and offerings
                                                </td>
                                                <td className="p-4 border border-white/10 align-top">
                                                    Consent, Legitimate interest
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 border border-white/10 align-top">
                                                    To communicate with you for non-marketing purposes including by sending you Services related e-mails, push notifications, and other messages
                                                </td>
                                                <td className="p-4 border border-white/10 align-top">
                                                    Contract, Consent, Legitimate interest, Legal obligation
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 border border-white/10 align-top">
                                                    To operate our business, including creating and managing user accounts or other user profiles, analyzing and monitoring our performance, usage and activities in connection with our Services
                                                </td>
                                                <td className="p-4 border border-white/10 align-top">
                                                    Legal obligation, Legitimate interest, Consent, Contract
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 border border-white/10 align-top">
                                                    To investigate and resolve disputes, to establish, exercise or defend our legal claims, and to enforce our terms
                                                </td>
                                                <td className="p-4 border border-white/10 align-top">
                                                    Legal obligation, Legitimate interest, Consent
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 border border-white/10 align-top">
                                                    To investigate and resolve security issues
                                                </td>
                                                <td className="p-4 border border-white/10 align-top">
                                                    Legal obligation, Legitimate interest, Contract, Consent
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 border border-white/10 align-top">
                                                    To understand, diagnose, troubleshoot, resolve a fault or other issues related to the Services provided, and to provide customer assistance
                                                </td>
                                                <td className="p-4 border border-white/10 align-top">
                                                    Consent, Contract, Legitimate interest
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 border border-white/10 align-top">
                                                    To de-identify/anonymize Personal Information
                                                </td>
                                                <td className="p-4 border border-white/10 align-top">
                                                    Legitimate interest, Consent, Contract
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 border border-white/10 align-top">
                                                    To fulfil contractual obligations with third parties.
                                                </td>
                                                <td className="p-4 border border-white/10 align-top">
                                                    Legitimate interest, Consent, Contract
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 border border-white/10 align-top">
                                                    To prevent, detect, investigate fraud, including fraudulent payments and fraudulent use of the Services, abuse, violations and other trust and safety protocols of our terms, unlawful or criminal activity, unauthorized access to or use of Personal Information or Genezio’s systems and networks, to protect our rights and the rights of others, and to meet legal, governmental, and institutional policy obligations
                                                </td>
                                                <td className="p-4 border border-white/10 align-top">
                                                    Legal obligation, Legitimate interest, Consent, Contract
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 border border-white/10 align-top">
                                                    To process orders and other transactions, including billing.
                                                </td>
                                                <td className="p-4 border border-white/10 align-top">
                                                    Contract, Consent
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 border border-white/10 align-top">
                                                    Employment and hiring related matters
                                                </td>
                                                <td className="p-4 border border-white/10 align-top">
                                                    Legal obligation, Legitimate interest, Consent, Contract
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 border border-white/10 align-top">
                                                    Managing, and participating in, webinars, contests, programs, training, certifications or promotions
                                                </td>
                                                <td className="p-4 border border-white/10 align-top">
                                                    Consent, Contract, Legitimate interest
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 border border-white/10 align-top">
                                                    To conduct survery and/or research
                                                </td>
                                                <td className="p-4 border border-white/10 align-top">
                                                    Consent, Contract, Legitimate interest
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                                    COLLECTING YOUR DATA
                                </h2>
                                <div className="space-y-4">
                                    <p>
                                        Where data is requested directly from you, Genezio asks you to provide those
                                        categories of Personal Information that we require for the purposes mentioned
                                        above.
                                    </p>
                                    <p>
                                        Genezio may obtain Personal Information from third party sources, including
                                        customers, third-party cloud, software or services providers, or third-party
                                        tracking technologies such as cookies.
                                    </p>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                                    SHARING PERSONAL INFORMATION
                                </h2>
                                <p className="mb-6">
                                    There are certain circumstances in which we may disclose, transfer or share your
                                    data with certain third parties with or without notifying you in advance, as you
                                    will see below:
                                </p>
                                <div className="overflow-x-auto mb-8">
                                    <table className="w-full text-left border-collapse border border-white/10">
                                        <thead>
                                            <tr className="bg-white/5">
                                                <th className="p-4 border border-white/10 text-white font-semibold w-1/3">
                                                    Categories of recipients
                                                </th>
                                                <th className="p-4 border border-white/10 text-white font-semibold w-2/3">
                                                    Reason for data sharing
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-white/10">
                                            <tr>
                                                <td className="p-4 border border-white/10 align-top font-semibold text-white">
                                                    Service providers and Business Partners
                                                </td>
                                                <td className="p-4 border border-white/10 align-top">
                                                    For the purposes described in this Policy, such as business and Services
                                                    functionality purposes, including Services and data hosting, online
                                                    advertising technologies, cloud hosting, research, auditing, data
                                                    processing, and to ensure compliance with industry standards, we work with
                                                    service providers, primarily digital service providers, who work on our
                                                    behalf and who may need access to certain Personal Information in order to
                                                    provide their services to us and for us to provide our Services to you.
                                                    These companies include providers of management services, hosting
                                                    services, email correspondence, cloud services, database management,
                                                    advertising services.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 border border-white/10 align-top font-semibold text-white">
                                                    Law enforcement
                                                </td>
                                                <td className="p-4 border border-white/10 align-top">
                                                    We share your Personal Information when we believe in good faith that it
                                                    is necessary to do so in order to comply with a legal obligation under
                                                    applicable law. We also share your Personal Information when we have a
                                                    good-faith belief that doing so is necessary for our legitimate interests,
                                                    rights and safety or those of a third party.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 border border-white/10 align-top font-semibold text-white">
                                                    Buyers of our business
                                                </td>
                                                <td className="p-4 border border-white/10 align-top">
                                                    We will share your Personal Information if we sell or negotiate the sale
                                                    of our business, assets and/or data to a buyer or potential buyer, if we
                                                    are implied in corporate transactions, bankruptcy, change of control or
                                                    other situation involving the transfer of our business, assets and/or
                                                    data.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 border border-white/10 align-top font-semibold text-white">
                                                    Relevant authorities
                                                </td>
                                                <td className="p-4 border border-white/10 align-top">
                                                    We will share your Personal Information with governmental regulatory
                                                    authorities, as required by law, including for legal, tax or accounting
                                                    purposes, in response to their requests for such information or to assist
                                                    in investigations, based on their legal obligations. These public
                                                    authorities or institutions may be relevant data protection authorities or
                                                    consumer protection authorities.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 border border-white/10 align-top font-semibold text-white">
                                                    Genezio&rsquo;s employees and contractors
                                                </td>
                                                <td className="p-4 border border-white/10 align-top">
                                                    In order to ensure that the Service is working and to guarantee compliance
                                                    with the applicable legislation, our collaborators and contractors may
                                                    process your Personal Information.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 border border-white/10 align-top font-semibold text-white">
                                                    Third parties
                                                </td>
                                                <td className="p-4 border border-white/10 align-top">
                                                    We may also disclose Personal Information to third parties in connection
                                                    with claims, disputes or litigation, when otherwise permitted or required
                                                    by law, or if we determine its disclosure is necessary to protect the
                                                    health and safety of you or any other person, to protect against fraud or
                                                    credit risk, to enforce our legal rights or the legal rights of others, to
                                                    enforce contractual commitments that you have made, or as otherwise
                                                    permitted or required by applicable law.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 border border-white/10 align-top font-semibold text-white">
                                                    Third Parties and other users You Share Information With
                                                </td>
                                                <td className="p-4 border border-white/10 align-top">
                                                    Some features of the Service may enable you to share content with
                                                    third-party applications or other users. Any information you choose to
                                                    share with these parties will be governed by their own terms and privacy
                                                    policies.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-4 border border-white/10 align-top font-semibold text-white">
                                                    With an individual&rsquo;s consent
                                                </td>
                                                <td className="p-4 border border-white/10 align-top">
                                                    Genezio will otherwise disclose Personal Information when an individual
                                                    gives us permission or directs us to disclose this information.
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                                    DATA SECURITY
                                </h2>
                                <div className="space-y-4">
                                    <p>
                                        We have implemented at least reasonable and appropriate physical, technical and
                                        organizational measures to protect the data we collect and to prevent
                                        unauthorized access, disclosure and misuse of your Personal Information, such as
                                        data encryption and access controls.
                                    </p>
                                    <p>
                                        Our Service involve integrations with third party LLM&rsquo;s, or may direct you to,
                                        websites, apps, and services managed by third parties.
                                    </p>
                                    <p>
                                        By interacting with these third parties, you are providing information directly
                                        to the third party and not to Genezio and you are subject to the third
                                        party&rsquo;s privacy policy.
                                    </p>
                                    <p>
                                        If you access third-party services, such as social media sites or other sites
                                        linked through the Service, these third-party services will be able to collect
                                        Personal Information about you, including information about your activity on the
                                        Services. If we link a site or service via our Services, you should read their
                                        data usage policies or other documentation. Our linking to another site or
                                        service doesn&rsquo;t mean we endorse it or speak for that third party.
                                    </p>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">CHILDREN</h2>
                                <p>To use our Services, you must be at least 18 years old.</p>
                            </section>

                            <section>
                                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                                    RETENTION PERIOD
                                </h2>
                                <div className="space-y-4">
                                    <p>
                                        We will store and process your Personal Information for the period of time
                                        necessary to achieve the purposes described in this Policy and in accordance
                                        with our legal and contractual obligations, unless otherwise required by law or
                                        unless we have legitimate interests that allow us to do so for a longer term
                                        case in which data will be stored for this latter longer term. Thereafter, the
                                        data will be erased in accordance with our procedures, which may involve
                                        anonymization or destruction.
                                    </p>
                                    <p>
                                        If you ask us to, we will delete or anonymize your Personal Information so that
                                        it can no longer be identified, unless we are permitted or required by law to
                                        retain certain Personal Information, including in situations such as the
                                        following:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>
                                            If there is an unresolved issue related to your use of the Service, such as an
                                            outstanding claim or an unresolved complaint or dispute, we will retain the
                                            necessary Personal Information until the issue is resolved;
                                        </li>
                                        <li>
                                            Where we need to retain Personal Information for our legal, tax, audit and
                                            accounting obligations, we will retain the Personal Information required for
                                            the period required by applicable law;
                                        </li>
                                        <li>
                                            When necessary for our legitimate business interests, such as to prevent fraud
                                            or to maintain the security of our users; and/or
                                        </li>
                                        <li>To enforce our rights and those of third parties.</li>
                                    </ul>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                                    YOUR RIGHTS AS PER GDPR
                                </h2>
                                <div className="space-y-4">
                                    <p>
                                        You have a number of rights in relation to the usage of your Personal
                                        Information by Genezio, which you can exercise by sending an e-mail to{" "}
                                        <a
                                            href="mailto:privacy@genezio.com"
                                            className="text-white hover:underline"
                                        >
                                            privacy@genezio.com
                                        </a>
                                        .
                                    </p>
                                    <ul className="space-y-4">
                                        <li>
                                            <strong>Right to information.</strong> You have the right to know how we
                                            handle your Personal Information in an appropriate and transparent way and
                                            what rights you can exercise in this respect. In this Policy, we have
                                            explained in detail what Personal Information we collect from you and how we
                                            handle your Personal Information.
                                        </li>
                                        <li>
                                            <strong>Right of access.</strong> You have the right to access your Personal
                                            Information we hold at any time. Please use your Authentication Data. In
                                            addition, we may ask you questions to verify your identity.
                                        </li>
                                        <li>
                                            <strong>Right to rectification.</strong> You have the right to rectify the
                                            Personal Information we hold about you where it is incorrect or out of date
                                            and/or to complete such data where it is incomplete. You can do this yourself
                                            24/7 in your App account.
                                        </li>
                                        <li>
                                            <strong>Right to withdraw.</strong> This right entitles you to object to
                                            further processing of your Personal Information under the conditions and
                                            within the limits provided by law. In particular, if you have given your
                                            consent to our use of your Personal Information, you have the right to
                                            withdraw this consent at any time.
                                        </li>
                                        <li>
                                            <strong>Right to object to direct marketing.</strong> If Personal Information
                                            is processed for direct marketing purposes, you have the right to object at
                                            any time and free of charge to the processing of your Personal Information for
                                            direct marketing purposes by clicking on the &ldquo;Unsubscribe&rdquo; box
                                            when you receive such an email or by emailing us at the email above. If you
                                            object to processing for direct marketing purposes, your Personal Information
                                            will no longer be processed for such purposes. However, these opt-outs do not
                                            apply to communications that relate to order fulfillment, agreements, support,
                                            warnings about the safety of our products, or other administrative and
                                            transactional notices, where the primary purpose of such communications is not
                                            promotional.
                                        </li>
                                        <li>
                                            <strong>Right to data portability.</strong> You have the right to receive the
                                            Personal Information you have provided to us, in the context of the agreement
                                            you have entered into with us, to store this Personal Information in a
                                            database of your own or a third party. Please include your and account ID,
                                            name and e-mail address. In addition, we may ask you questions to verify
                                            your identity.
                                        </li>
                                        <li>
                                            <strong>Right to restriction of processing.</strong> You have the right to
                                            obtain restriction of the processing of your Personal Information in certain
                                            cases (for example, where you contest the accuracy of your Personal
                                            Information, for a period of time, to allow us to verify the accuracy).
                                        </li>
                                        <li>
                                            <strong>Right to have your account forgotten/deleted.</strong> In some cases,
                                            you have the right to be forgotten. In this case, we will assess whether we
                                            can delete your data or whether we need to retain certain data to comply with
                                            a legal obligation. You can ask us to delete (part of) your Personal
                                            Information.
                                        </li>
                                        <li>
                                            <strong>Right to complain.</strong> If you disagree with the way we handle
                                            your Personal Information, you have the right to lodge a complaint. If you
                                            have a complaint, we would like to resolve it with you first. Please include
                                            your name, e-mail address and Authentication Data when contacting us.
                                        </li>
                                    </ul>
                                    <p>
                                        At the same time, you have the right to lodge a complaint directly to the
                                        National Supervisory Authority for Personal Information Processing (ANSPDP),
                                        with headquarters in Bulevardul Gheorghe Magheru nr. 28 - 30, sector 1,
                                        Bucharest (postal code: 010336; phone no: 0040 318.059.211).
                                    </p>
                                    <p>
                                        Please note that under many countries&apos; laws, you have the right to lodge a
                                        complaint with the supervisory authority in the place in which you live or work.
                                        A full list of EU supervisory authorities&rsquo; contact details is available{" "}
                                        <a
                                            href="https://edpb.europa.eu/about-edpb/about-edpb/members_en"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-white hover:underline"
                                        >
                                            here
                                        </a>
                                        .
                                    </p>
                                    <p>
                                        You also have the right to lodge a complaint with the competent court of law
                                        against us if you believe that your rights under the GDPR have been violated as
                                        a result of our processing your Personal Information, as well as against a
                                        legally binding decision of the ANSPDP relating to you and your Personal
                                        Information.
                                    </p>
                                    <p>There is usually no fee for exercising the above rights.</p>
                                    <p>
                                        You will not have to pay a fee to access your Personal Information (or to
                                        exercise any of your other rights). However, we may charge a reasonable fee if
                                        your request is clearly unfounded, repetitive or excessive. Alternatively, we
                                        may refuse to comply with your request in these circumstances.
                                    </p>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                                    TRANSFERS TO OTHER COUNTRIES
                                </h2>
                                <div className="space-y-4">
                                    <p>
                                        <strong>Transfers from and outside of the EU</strong>
                                    </p>
                                    <p>
                                        Genezio SRL is based in Romania. We do not transfer Personal Information outside
                                        the EU.
                                    </p>
                                    <p>
                                        Whenever we transfer your Personal Information outside the EU, we endeavor to
                                        ensure that one of the following safeguards is in place:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>
                                            we only transfer your Personal Information to countries that have been deemed
                                            to provide an adequate level of protection of Personal Information. For more
                                            details in the EU, please see European Commission: Adequacy Decisions;
                                        </li>
                                        <li>
                                            where we use certain service providers, we may use specific contracts, which
                                            provide the same protection for Personal Information as in the EU;
                                        </li>
                                        <li>
                                            where such data cannot be afforded one of the above protections, we will only
                                            transfer it outside of these territories if it is necessary for the
                                            performance of our contract with you or if we have your free, informed, clear
                                            and specific consent.
                                        </li>
                                    </ul>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                                    CHANGES TO OUR POLICY
                                </h2>
                                <p>
                                    We may change this Policy from time to time. If we make material changes to the
                                    way in which we use or disclose information we collect, we will use reasonable
                                    efforts to notify you (such as by emailing you at the last email address you
                                    provided us, by posting notice of such changes on the Service, or by other means
                                    consistent with applicable law) and will take additional steps as required by
                                    applicable law.
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
