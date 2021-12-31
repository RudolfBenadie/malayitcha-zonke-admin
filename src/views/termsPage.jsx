import { useEffect } from "react";

const TermsPage = () => {

  useEffect(() => {
    const footer = document.getElementById('footer-container');
    footer.classList.remove('hidden');
  })
  return (
    <div className='panel-without-sidebar'>
      <h3>Help</h3>
      <h1>Malayicha Zonke</h1>
      <h3>Terms and Conditions</h3>
      <p>These terms and conditions explain the rights, obligations and responsibilities of all parties to this Agreement. Where we use the word ‘you’ or ‘your’, it means the customer. ‘We’, ‘us’ or ‘our’,
        means Malayicha Zonke (MZ). These terms and conditions can be varied or amended at any time at the discretion of MZ and the customer is hereby advised to consult these terms and conditions
        on MZ website on a regular basis, particularly prior to availing of man and van services via MZ website. Your attention is drawn to clause 4, which sets out liability to you for any loss or
        damage to goods and property.</p>
      <h4>1. Your Quotation</h4>

      <p>1.1. Our quotation, unless otherwise stated, does not include customs duties and inspections or any other fees or taxes payable to government bodies - this includes, but is not limited to,
        congestion &amp; low emission zone charges. Our quotation will include a total price for the service and a initial payment payable in advance of services being provided. The remainder of the quoted
        total price (that is, the total price minus the initial payment) is payable directly to the scheduled driver. Liability for your goods resides at all times with the driver (subject to clauses 2.2
        and
        the provisions of clause 4). MZ will require drivers to confirm that they have insurance and documentation; in particular full uk driving license, a certificate of vehicle insurance, goods in
        transit insurance, a certificate of Public Liability Insurance (optional) and are permitted to work in the UK .</p>
      <p>1.2. We may change the price or make additional charges if circumstances are found to apply, which have not been taken into account when preparing our quotation and confirmed by us in writing.
        These include (but are not limited to):</p>
      <p>1.2.1. The specifications of the work to be carried out, that was provided by you is significantly different to the actual work required when the driver arrives at his/her scheduled time.</p>
      <p id="tc_access">1.2.2. The stairs, lifts or doorways are inadequate for free movement of the goods without mechanical equipment or structural alteration, or the approach, road or driveway is
        unsuitable for the
        driver’s vehicle(s) and/or containers to load and/or unload within 10 metres of the doorway of the location for collection and/or delivery.</p>
      <p>1.2.3. The driver has to pay for parking or other fees or charges in order to carry out services on your behalf.</p>
      <p>1.2.4. There are delays or events outside our reasonable control (including but not limited to traffic delays, extreme weather and similar events), which increase or extend the resources or time
        required to complete the agreed work (and upon which some or all of the quoted price
        is based).</p>
      <p>1.2.5. We or the assigned service provider agree in writing to increase the limit of liability set out in clause 4.</p>
      <p>1.3. In any such circumstances, adjusted charges will apply and will become payable to the driver directly.</p>
      <h4>2. Work not included in the Quotation</h4>

      <p>2.1. Unless agreed by us in writing, MZ or our assigned service providers will not:</p>
      <p id="tc_dismantle">2.1.1. Dismantle or assemble unit or system furniture (flat-pack), fitments or fittings. Any such agreed assembly/disassembly is performed at your risk and neither we nor the
        assigned service
        provider will be liable for damage/breakages during such work. It is your responsibility to provide any tools/equipment required for agreed work of this nature. Agreements with your assigned
        service provider to dismantle or assemble unit or system furniture (flat-pack), fitments or fittings do not form part of your contract of service with MZ, any subsequent liability therefore lies
        solely
        with your assigned service provider.</p>
      <p>2.1.2. Disconnect, reconnect, dismantle or reassemble appliances, fixtures, fittings or equipment.</p>
      <p>2.1.3. Take up or lay fitted floor coverings.</p>
      <p>2.1.4. Move items from a loft, unless properly lit and floored and safe access is provided. (Properly lit, floored and safe access are at the discretion of the driver at all times).</p>
      <p>2.1.5. Move or store any items excluded on your quotation.</p>
      <p>2.1.6 Enter premises or undertake work that they deem to be unsafe or unsanitary.</p>
      <p>2.1.7 Move or store perishable goods. Perishable goods must be removed from refrigeration devices before transportation. Neither Malayicha Zonke nor service providers are liable for
        any loss/deterioration of perishable goods during your move.</p>
      <p>2.2. MZ or its assigned service providers are not authorised or qualified to carry out such work. We recommend that a properly qualified person is employed separately by you to carry out these
        services.</p>
      <h4>3. Your responsibility</h4>

      <p>3.1. It will be your sole responsibility to:</p>
      <p>3.1.1. Items transported with a value exceeds that covered by the drivers Insurance are covered to their full value by insurance held by you, the customer. FFMV accept no
        responsibility for damage, loss or breakages to customer goods or third parties during the duration of the work.</p>
      <p>3.1.2. Obtain, at your own expense, all documents, permits, permissions, licenses, customs documents, necessary for the collection and delivery, removal or waste disposal to be completed.</p>
      <p>3.1.3. Be present or represented (by person or documentation for collection or delivery/disposal) during the collection and delivery of the removal, the collection of a waste disposal item or the
        collection of a collect and deliver item.</p>
      <p>3.1.4. Ensure an authorised signature on agreed inventories, receipts, waybills, job sheets or other relevant documents (that the driver may require to be signed), by way of confirmation of
        collection or delivery of goods.</p>
      <p>3.1.5. Take all reasonable steps to ensure that nothing that should be removed is left behind and nothing is taken away in error.</p>
      <p>3.1.6. Arrange proper protection for goods left in unoccupied or unattended premises, or where other people such as (but not limited to) tenants or workmen, are, or will be present.</p>
      <p>3.1.7. Prepare adequately and stabilise all appliances or electronic equipment, prior to their removal.</p>
      <p>3.1.8. Empty, properly defrost and clean refrigerators and freezers. MZ or its assigned service providers are not responsible for the contents of refrigerators or freezers.</p>
      <p>3.1.9. Provide us with a contact address and telephone/email details for correspondence during removal, transit and/or storage of goods.</p>
      <p>3.2. In any such circumstances, adjusted charges will apply and become payable.</p>
      <h4 id="tc_responsibility">4. Ours and the assigned service provider’s responsibility</h4>

      <p>4.1. It is our responsibility to allocate and schedule a driver to service your specified needs, after you have provided your details and specification of Job required via MZ website and after
        you have made a payment for the initial payment quoted for that Job.</p>
      <p>4.1.1. You agree that drivers allocated and scheduled to service your specified needs are not employees of MZ and are self-employed contractors who operate their own vehicles.</p>
      <p>4.1.2. MZ act as an intermediary to schedule the most appropriate driver and vehicle for your specified needs and that once the Job has been scheduled, it is the driver’s responsibility to
        service your needs for a direct payment to the driver (less our initial payment) upon completion of the Job. You agree that once the booking is made the contract for it's completion is between you
        the
        customer and the assigned service provider and that said driver will be responsible for any loss incurred by non-fulfilment of that contract, excepting the amount of the initial payment paid for
        the booking
        which
        will remain the liability of MZ.</p>
      <p>4.2. It is the allocated Drivers' responsibility to ensure that the allocated and scheduled driver arrives for the Job at the time and on the date agreed between you and us. You agree that the date
        required by you, may not be available and that we will endeavour to schedule a date and time as close to the date and time you specify for the Job. In any case, we will inform you of the scheduled
        date and time in advance and make arrangements with you if that date and time is not convenient.</p>
      <p>4.3. It is our responsibility to advise you if the date and time you request for the Job is not available as soon as possible. A booking placed through us is provisional subject to confirmation by
        your selected man and van provider in regard to availability.
        Should the selected provider not confirm to undertake the work, Malayicha Zonke will endeavour to find a replacement provider.
        In the event of non-confirmation of the booking by the selected provider and no replacement provider being available your Initial Payment will be refunded and the booking cancelled. In the event
        of cancellation by MZ or an allocated driver you accept that our liability extends solely up to the amount of the initial payment for the booking made to MZ.</p>
      <p>4.4. It is the assigned service provider’s responsibility to deliver your goods to you, or produce them for your collection, undamaged. By “undamaged” we mean in the same condition as they were in
        at the
        time when they were packed or otherwise made ready for transportation. MZ do not provide insurance cover. Goods in transit insurance and any applicable vehicle insurance or licences and permits
        are owned by the driver at all times and any liability for loss or damage to a customer’s goods and/or property as a result of work carried out by them resides with the assigned service provider
        and/or their insurance provider.</p>
      <p>4.5. In the event that any of your items and/or property are damaged in transit, it is the assigned service provider’s responsibility to compensate you for the agreed cost of the damage to your
        item(s). All
        assigned service providers
        have declared they have goods in transit insurance and therefore shall be able to reimburse you for any damages.</p>
      <p>4.7. If you do not require the driver to accept standard liability pursuant to clause 4, our assigned service providers will not be liable to you for failure to discharge the responsibilities
        identified in
        clause 4.4, 4.5 and 4.6, unless that failure was caused by negligence on the part of the assigned service provider. In the event that the failure was caused by negligence on the part of the
        assigned service provider,
        the responsibility for any loss or damage to your goods is the responsibility of the assigned service provider.</p>
      <p>4.8. Damage to Televisions/PCs/Monitors
        Please note that MZ and assigned service providers will not take any responsibility for any internal damage to a television/PC or Monitor without clear evidence of external damage to the
        television/PC or Monitor. This will include but is not exclusive to:
        * backlight 'bleeding';
        * colour banding or bleeding;
        * clouding of the screen; or
        * pixel damage.
        Due to the sensitive nature of televisions/computer equipment, without clear evidence of external damage, it is impossible to prove who caused any internal damage.</p>
      <p>4.9. Damage to Pianos (resultant damage to property)
        Please note that MZ and assigned service providers will not take any responsibility for damage caused to a piano during a removal. This includes any damage caused by the removal of a piano
        to a property. Pianos should be moved by a specialist piano mover due to the bulk, weight and awkwardness of the item. Although a driver will be prepared to move a piano on a customer's express
        instruction, no liability is accepted for any resultant damage. It is also a requirement that the driver is given prior notice,either via notes in the booking process, or verbally prior to the
        move, that the move will involve moving a piano.</p>
      <p>4.10. If you indicate you wish to ride in the van as a passenger you agree to ride in the van at your own risk, and accept that any liability for injury or loss rests with the service provider who
        accepts your booking and not with Malayicha Zonke. Quote prices do not include a passenger charge, however a minimal cost to cover fuel is applied.
        Your service provider will not charge any additional costs should you ride in the van. It is your responsibility to verify liability and insurance for passenger carriage, where applicable, with
        your service provider and that you are adequately covered before work commences.</p>

      <h4>5. Accounts</h4>

      <p>5.1. Certain parts of our website (such as registering as a driver) may require an Account in order to access them.</p>
      <p>5.2. You may not create an Account if you are under 18 years of age.</p>
      <p>5.3. When creating an Account, the information you provide must be accurate and complete. If any of your information changes at a later date, it is your responsibility to ensure that you contact us
        to change your information.</p>
      <p>5.4. We ask that you choose a strong password for your Account, consisting of a combination of lowercase and uppercase letters, numbers and symbols. It is your responsibility to keep your password
        safe. You must not share your Account with anyone else. If you believe your Account is being used without your permission, please contact us immediately. We will not be liable for any unauthorised
        use of your Account.</p>
      <p>5.5. You must not use anyone else’s Account.</p>
      <p>5.6. Any personal information provided in your Account will be collected, used and held in accordance with your rights and our obligations under the POPI Act.</p>
      <p>5.7. If you wish to close your Account, you may do so at any time. Closing your Account will result in the removal of your information. Closing your Account will also remove access to any areas of
        our website requiring an Account for access.</p>
      <p>5.8. If you close your Account, any comments, reviews or information you have created on our website will be deleted.</p>
      <h4>6. Special Requests</h4>

      <p>6.1. If you have any special requests, please let us know at the time of booking. We will endeavour to pass on all such requests to the driver; however we cannot guarantee that they will be met and
        we will have no liability to you if they are not.</p>
      <h4 id="tc_cancellations">7. Changes and Cancellations by you</h4>

      <p>7.1. Amendments can be made by calling &lt;Telephone number&gt; at least 2 full business days before the booked service. Amendments will take effect from the day of
        receipt, if the scheduled driver can accommodate the amendment. If an amendment cannot be accommodated by the driver, MZ shall endeavour to allocate and schedule an alternative driver and
        vehicle. MZ cannot guarantee that an alternative driver can be scheduled, as this depends on the availability of an alternative driver.</p>
      <p>7.2. Whilst we will try to assist, we cannot guarantee that any requests for amendments will be met.</p>
      <p>7.3. Charges may apply for amendments or cancellations.</p>
      <p>7.4. A cancellation can be made by calling MZ on &lt;Telephone number&gt; at least full 2 business days before the booked service is scheduled.</p>
      <p>7.5. Any cancellations received less than 2 full business days before the date of the booked service is scheduled will incur a charge of the value of your initial payment.
        <p>7.6. Any cancellations for bookings that have been confirmed with a service provider will incur a £15 administration charge up to the value of your initial payment if notified more than 2 full
          business days before the booked service is scheduled. The initial payment minus this administration charge will then be refunded to your initial payment method.</p>
        <p>7.7. A rescheduling request can be made by calling &lt;Telephone number&gt; at least 2 full business days before the booked service.</p>
        <p>7.8. Any reschedule requests received less than 2 business days before the date and time of the booked service will incur a loss of your initial payment if the original booking is confirmed with an
          assigned service provider and a replacement cannot be found to meet the new schedule.</p>
        <p>7.9. Any reschedule or cancellation requests must be made by speaking to our customer service team directly by calling &lt;Telephone number&gt;. Reschedule or cancellation requests will not be accepted by
          text, email or other communication formats.</p>

        <h4>8. Changes and Cancellations by the Driver</h4>

        <p>8.1. We will inform you as soon as reasonably possible, if the driver needs to make a significant change to your confirmed booking or to cancel it. We will use all reasonable efforts to find an
          alternative suitable driver for you at no extra cost, but we will have no further liability to you.</p>
        <h4>9. If you have a complaint</h4>

        <p>9.1. If you encounter a problem with your service, please inform the driver or call us by using the numbers given to you on your booking email and we will endeavour to investigate the matter with
          the driver on your behalf and put things right. Failure to notify us or the driver concerned of your complaint at this stage will affect our ability to investigate the matter complained of and
          your rights under the agreement.</p>
        <p>9.2. If you have any service issues after the completion of the scheduled Job, in relation to services booked with us, you should direct them to us via the “Contact Us” menu item on our website or
          via email at help@malayichazonke.co.za, or by post to Malayicha Zonke, &lt;Address&gt;. We will liaise with the driver and endeavour to resolve all
          service issues within 28 days of notification.</p>
        <p>9.3. Please note that any complaints must be received in writing within 28 days of the scheduled completion date of the Job.</p>
        <h4>10. Intellectual Property Rights</h4>

        <p>10.1. Except User content, all content included on the website and the copyright and other intellectual property rights subsisting in that content, unless specifically labelled
          otherwise, belongs to or has been licensed by us. All content (including User content) is protected by applicable South African and international intellectual property laws and treaties.</p>
        <p>10.2. Subject to sub-clause 12.3 and 12.6, you may not reproduce, copy, distribute, sell, rent, sub-licence, store or in any manner re-use content from our website unless given express written
          permission to do so by us.</p>
        <p>10.3. You may:</p>
        <p>10.3.1. Access, view or use our website in a web browser (including any web browsing capability built into other types of software or app);</p>
        <p>10.3.2. Download our website (or any part of it) for caching;</p>
        <p>10.3.3. Print pages from our website;</p>
        <p>10.3.4. Download extracts from pages on our website; and</p>
        <p>10.3.5. Save pages for our website for later and/or offline viewing.</p>
        <p>10.4. Our status as the owner and author of the content on our website (or that of identified licensors, as appropriate) must always be acknowledged.</p>
        <p>10.5. You may not use any content saved or downloaded from our website for commercial purposes without first obtaining a licence from us (or our licensors, as appropriate) to do so.</p>

        <h4>11. Links to our website</h4>

        <p>11.1. You may link to Our Site provided that:</p>
        <p>11.1.1. You do so in a fair and legal manner;</p>
        <p>11.1.2. You do not do so in a manner that suggests any form of association, endorsement or approval on our part, where none exists;</p>
        <p>11.1.3. You do not use any logos or trademarks displayed on our website without our express written permission; and</p>
        <p>11.1.4. You do not do so in a way that is calculated to damage our reputation or to take unfair advantage of it.</p>
        <p>11.2. You may not link to any page other than the homepage of our website (malayichazonke.co.za). Deep-linking to other pages requires our express written permission.</p>
        <p>11.3. Framing or embedding of our website on other websites is not permitted without our express written permission.</p>
        <p>11.4. You may not link to our website, from any other site, the main content of which contains material that:</p>
        <p>11.4.1. Is sexually explicit;</p>
        <p>11.4.2. Is obscene, deliberately offensive, hateful or otherwise inflammatory;</p>
        <p>11.4.3. Promotes violence;</p>
        <p>11.4.4. Promotes or assists in any form of unlawful activity;</p>
        <p>11.4.5. Discriminates against, or is in any way defamatory of, any person, group or class of persons, race, sex, religion, nationality, disability, sexual orientation, or age;</p>
        <p>11.4.6. Is intended or is otherwise likely to threaten, harass, annoy, alarm, inconvenience, upset or embarrass another person;</p>
        <p>11.4.7. Is calculated or is otherwise likely to deceive another person;</p>
        <p>11.4.8. Is intended or is otherwise likely to infringe (or threaten to infringe) another person’s privacy;</p>
        <p>11.4.9. Misleadingly impersonates any person or otherwise misrepresents the identity or affiliation of a particular person in a way that is calculated to deceive (obvious parodies are not included
          in this definition provided that they do not fall within any of the other provisions of this sub-clause 13.4);</p>
        <p>11.4.10. Implies any form of affiliation with us where none exists;</p>
        <p>11.4.11. Infringes or assists in the infringement of the intellectual property rights (including, but not limited to, copyright, trademarks and database rights) of any other party; or</p>
        <p>11.4.12. Is made in breach of any legal duty owed to a third party including, but not limited to, contractual duties of confidence.</p>
        <h4>12. Links to other websites</h4>

        <p>12.1 Links to other sites may be included on website. Unless expressly stated, these sites are not under our control. We neither assume nor accept responsibility or liability for the content of
          third party websites. The inclusion of a link to another website on our website is for information only and does not imply any endorsement of the sites themselves or of those in control of
          them.</p>
        <h4>13. Force Majeure</h4>

        <p>13.1. Force majeure means that neither we, nor your assigned service provider, will pay you compensation if we or your assigned service provider have to cancel or change the service because of
          unforeseeable circumstances beyond our or
          your assigned service provider’s control. These can include, but are not limited to, accidents and related delays, traffic delays, unplanned marches, demonstrations and organised disruption,
          police operations, unforeseen road
          hazards, terrorist activity and its consequences or the threat of such activity, riot, the act of any government or other national or local authority, fuel shortage, industrial dispute, natural or
          nuclear
          disaster, fire, adverse weather conditions or other similar events outside our or your assigned service provider’s control.</p>
        <h4>14. Disclaimers</h4>

        <p>14.1. The content of our website does not constitute advice on which you should rely. It is provided for general information purposes only.</p>
        <p>14.2. We make no representation, warranty, or guarantee that our website will meet your requirements, that it will be of satisfactory quality, that it will be fit for a particular purpose, that it
          will not infringe the rights of third parties, that it will be compatible with all software and hardware, or that it will be secure.</p>
        <p>14.3. We make reasonable efforts to ensure that the content on our website is complete, accurate, and up-to-date. We do not, however, make any representations, warranties or guarantees (whether
          express or implied) that the content is complete, accurate, or up-to-date. Please note that this exception does not apply to information concerning services for sale through our website.</p>

        <h4>15. Viruses, Malware and Security</h4>

        <p>15.1. We take all reasonable steps to ensure that our website is secure and free from viruses and other malware. We do not, however, guarantee that our website is secure or free from viruses or
          other malware and accept no liability in respect of the same.</p>
        <p>15.2. You are responsible for protecting your hardware, software, data and other material from viruses, malware, and other internet security risks.</p>
        <p>15.3. You must not deliberately introduce viruses or other malware, or any other material which is malicious or technologically harmful either to or via our website.</p>
        <p>15.4. You must not attempt to gain unauthorised access to any part of our website, the server on which our website is stored, or any other server, computer, or database connected to our
          website.</p>
        <p>15.5. You must not attack our website by means of a denial of service attack, a distributed denial of service attack, or by any other means.</p>
        <p>15.6. By breaching the provisions of sub-clauses 17.3 to 17.5, you may be committing a criminal offence. Any and all such breaches will be reported to the
          relevant law enforcement authorities, and we will cooperate fully with those authorities by disclosing your identity to them. Your right to use our website will cease immediately in the event of
          such a breach.</p>
        <h4>16. Acceptable Usage Policy</h4>

        <p>16.1. You may only use our website in a manner that is lawful and that complies with the provisions of this Clause 18. Specifically:</p>
        <p>16.1.1. You must ensure that you comply fully with any and all local, national or international laws and/or regulations;</p>
        <p>16.1.2. You must not use our website in any way, or for any purpose, that is unlawful or fraudulent;</p>
        <p>16.1.3. You must not use our website to knowingly send, upload, or in any other way transmit data that contains any form of virus or other malware, or any other code designed to adversely affect
          computer hardware, software, or data of any kind; and</p>
        <p>16.1.4. You must not use our website in any way, or for any purpose, that is intended to harm any person or persons in any way.</p>
        <p>16.2. When submitting user content (or communicating in any other way using Our Site), you must not submit, communicate or otherwise do anything that:</p>
        <p>16.2.1. Is sexually explicit;</p>
        <p>16.2.2. Is obscene, deliberately offensive, hateful or otherwise inflammatory;</p>
        <p>16.2.3. Promotes violence;</p>
        <p>16.2.4. Promotes or assists in any form of unlawful activity;</p>
        <p>16.2.5. Discriminates against, or is in any way defamatory of, any person, group or class of persons, race, sex, religion, nationality, disability, sexual orientation or age;</p>
        <p>16.2.6. Is intended or otherwise likely to threaten, harass, annoy, alarm, inconvenience, upset, or embarrass another person;</p>
        <p>16.2.7. Is calculated or is otherwise likely to deceive;</p>
        <p>16.2.8. Is intended or otherwise likely to infringe (or threaten to infringe) another person’s right to privacy;</p>
        <p>16.2.9. Misleadingly impersonates any person or otherwise misrepresents your identity or affiliation in a way that is calculated to deceive (obvious parodies are not included within this definition
          provided that they do not fall within any of the other provisions of this sub-Clause 18.2);</p>
        <p>16.2.10. Implies any form of affiliation with us where none exists;</p>
        <p>16.2.11. Infringes or assists in the infringement of, the intellectual property rights (including, but not limited to, copyright, patents, trademarks and database rights) of any other party; or</p>
        <p>16.2.12. Is in breach of any legal duty owed to a third party including, but not limited to, contractual duties and duties of confidence.</p>
        <p>16.3. We reserve the right to suspend or terminate your access to Our Site if you materially breach the provisions of this Clause 12 or any of the other provisions of these Terms and Conditions.
          Specifically, We may take one or more of the following actions:</p>
        <p>16.3.1. Suspend, whether temporarily or permanently, your Account and/or your right to access our website;</p>
        <p>16.3.2. Remove any user content submitted by you that violates this Acceptable Usage Policy;</p>
        <p>16.3.3. Issue you with a written warning;</p>
        <p>16.3.4. Take legal proceedings against you for reimbursement of any and all relevant costs on an indemnity basis resulting from your breach;</p>
        <p>16.3.5. Take further legal action against you as appropriate;</p>
        <p>16.3.6. Disclose such information to law enforcement authorities as required or as we deem reasonably necessary; and/or</p>
        <p>16.3.7. Any other actions which we deem reasonably appropriate (and lawful).</p>
        <p>16.4. We hereby exclude any and all liability arising out of any actions (including, but not limited to those set out above) that we may take in response to breaches of these Terms and
          Conditions.</p>
        <h4>17. Privacy and Cookies</h4>

        <p>17.1. Use of our website is also governed by our Cookie and Privacy Policies, available from our Privacy Policy. These policies are incorporated into these Terms and Conditions by this
          reference.</p>

        <h4>18. General</h4>

        <p>18.1. If you wish to rely on any variations to these terms and conditions, you should ensure that such variations are agreed with us in writing as soon as possible.</p>
        <p>18.2. We may transfer or subcontract any or all of our rights and obligations under these terms and conditions at any time.</p>
        <p>18.3. We may alter these terms and conditions from time to time and post the new version on our website, following which, all use of our website will be governed by the new version.</p>
        You must check the terms and conditions on the website regularly. The terms governing the purchase of any service will be the terms in place at the time of your booking.</p>

      <p>18.4. A person who is not a party to our agreement or the agreement with the driver has not rights under the Contracts (Rights of Third Parties) Act 1999 to enforce any term of either agreement,
        but this does not affect any right or remedy of another party which exists or is available apart from that Act.</p>
      <p>18.5. If any provision or term of these terms and conditions shall become or be declared illegal, invalid or unenforceable for any reason whatsoever, such term or provision shall be deleted, but
        all other terms will remain valid.</p>
      <p>18.6. Our terms and conditions and your use of our website are governed by the Laws of South Afroca, and in the event of any dispute under our contract, you agree to submit to the exclusive
        jurisdiction of the South African courts.</p>
      <p>18.7. Failure by either party to exercise any right or remedy under this agreement does not constitute a waiver of that right or remedy.</p>
      <p>18.8. These terms and conditions, together with the privacy policy, any quotation or booking form and payment method instructions, if any, replace all other terms and conditions previously
        applicable to the use of our website and/or sale of the service on behalf of the driver.</p>
      <h4>19. Changes to these Terms and Conditions</h4>

      <p>19.1. We may alter these Terms and Conditions at any time. Any such changes will become binding on you upon your first use of our website after the changes have been implemented. You are therefore
        advised to check this page from time to time.</p>
      <p>19.2. In the event of any conflict between the current version of these Terms and Conditions and any previous version(s), the provisions current and in effect shall prevail unless it is expressly
        stated otherwise.</p>
      <h4>20. Contacting Us</h4>

      <p>20.1. To contact us, please email us at help@malayichazonke.co.za or using any of the methods provided on our Contact Us page.</p>
      <h4>21. Communications from Us</h4>

      <p>21.1. If we have your contact details, we may from time to time send you important notices by email. Such notices may relate to matters including, but not limited to, service changes and changes to
        these Terms and Conditions.</p>
      <p>21.2. We will never send you marketing emails of any kind without your express consent. If you do give such consent, you may opt out at any time. Any and all marketing emails sent by us include an
        unsubscribe link. If you opt out of receiving emails from us at any time, it may take up to 28 business days for your new preferences to take effect.</p>
      <p>21.3. For questions or complaints about communications from us (including, but not limited to marketing emails), please contact us at help@malayichazonke.co.za using any of the methods provided on
        our Contact Us page.</p>
      <h4>22. Data Protection</h4>

      <p>22.1. Any and all personal information that we may collect will be collected, used and held in accordance with the provisions of the POPI Act and your rights and our obligations
        under that Act.</p>
      <p>22.2. We may use your personal information to:</p>
      <p>22.2.1. Reply to any communications you send to us;</p>
      <p>22.2.2. Send you important notices, as detailed in clause 21.</p>
      <p>22.3. We will not pass on your personal information to any third parties.</p>
      <h4>23. Law and Jurisdiction</h4>

      <p>23.1. These Terms and Conditions, and the relationship between you and us (whether contractual or otherwise) shall be governed by, and construed in accordance with, South African law.</p>
      <p>23.2. If you are a consumer, any disputes concerning these Terms and Conditions, the relationship between you and us, or any matters arising therefrom or associated therewith (whether contractual
        or otherwise) shall be subject to the jurisdiction of the courts of South Africa or your country of residence, as determined by your residency.</p>
      <p>23.3. If you are a business, any disputes concerning these Terms and Conditions, the relationship between you and us, or any matters arising therefrom or associated therewith (whether contractual
        or otherwise) shall be subject to the exclusive jurisdiction of the courts of South Africa.</p>

    </div>
  );
};

export default TermsPage;
