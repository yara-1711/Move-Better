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
        <tr>
        <td>
            <service-card 
              title="Osteopathy"
              subtitle="Osteopathy is a holistic, hands-on healthcare approach that focuses on the relationship between the body’s structure and function. Osteopaths use gentle manual techniques to improve joint mobility, release muscle tension, and enhance circulation and nervous system function. Rather than treating symptoms alone, osteopathy aims to address the root cause of pain or dysfunction. It is effective for back pain, headaches, sports injuries, digestive issues, and postural problems, supporting the body’s natural ability to heal and maintain balance."
              image="https://movebetterphysiotherapyclinic.com/wp-content/uploads/2026/01/Untitled-design-6.png"
            />
          </td>
          <td>
            <service-card 
              title="Sports Injury Management"
              subtitle="Sports injury management focuses on the prevention, diagnosis, treatment, and rehabilitation of injuries related to physical activity. It combines physiotherapy, manual therapy, exercise prescription, and injury-specific techniques to restore strength, mobility, and performance. The approach is tailored to the athlete’s sport, fitness level, and goals. Effective sports injury management not only treats acute and chronic injuries but also reduces the risk of re-injury, helping individuals return safely and confidently to training and competition."
            image="https://movebetterphysiotherapyclinic.com/wp-content/uploads/elementor/thumbs/a50b3d55-c4c1-4ae8-8617-6170a749e386-riul2vyljylhbuedvl8o6mv1fik9ovdnvxxla9q9wg.jpg" 
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>`;
  }
}

customElements.define("service-section", ServiceSection);
