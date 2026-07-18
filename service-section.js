class ServiceSection extends HTMLElement {
    connectedCallback() {

        this.innerHTML = `
        <div class="overflow-x-auto">
    <table class="table">
      <tbody>
        <tr>
          <td>
            <service-card 
              title="Manual physiotherapy"
              subtitle="Manual physiotherapy is a hands-on treatment approach focused on restoring movement, reducing pain, and improving physical function. It uses techniques such as joint mobilization, soft tissue release, stretching, and guided exercises tailored to the individual. By addressing muscle imbalances, joint stiffness, and movement dysfunctions, manual physiotherapy helps the body heal naturally. It is commonly used for back and neck pain, postural issues, post-surgical recovery, and chronic musculoskeletal conditions, promoting long-term mobility and overall physical well-being."
              image="https://movebetterphysiotherapyclinic.com/wp-content/uploads/elementor/thumbs/Untitled-design-2-rhs1m8cvwynhtzlwy0bfo05m1d4n6cofx1trmx3kww.png"
            />
          </td>
          <td>
            <service-card 
              title="Electrotherapy"
              subtitle="The SONOMED 9S is a combination therapy device that integrates ultrasound therapy and electrotherapy currents such as IFT, TENS, Muscles Stimulator currents Such as Galvanic Current and Faradic Current, Ultra Reiz, Lower Frequency Current such as Diadynamic current and Russian stimulation to treat:

✔ Chronic and acute musculoskeletal pain <br>   
✔ Soft tissue injuries <br>  
✔ Post-operative rehabilitation <br>  
✔ Sports injuries <br>  
✔ Muscle weakness and atrophy <br>  
✔ Chronic joint problems "
            image="https://movebetterphysiotherapyclinic.com/wp-content/uploads/2024/09/Shock-Wave-Therapy.png" 
            />
          </td>
          <td>
            <service-card 
              title="Tecar Therapy"
              subtitle="Transfer of Energy Capacitive and Resistive) is an advanced, non-invasive treatment that uses high-frequency electrical energy to stimulate the body’s natural healing processes. It improves blood circulation, reduces inflammation, and accelerates tissue repair by generating deep therapeutic warmth. Tecar Therapy is widely used for muscle injuries, joint pain, tendon problems, and post-operative rehabilitation. The treatment is comfortable, effective, and often combined with manual therapy to enhance recovery speed and improve functional outcomes. <br><br>"
              image="https://movebetterphysiotherapyclinic.com/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2026-02-07-at-4.41.38-PM-riuk6rt41qmsnh1rephjzqm2rkusp5vtgziczxcihs.jpeg" 
            
              
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>`;
    }
}

customElements.define("service-section", ServiceSection);