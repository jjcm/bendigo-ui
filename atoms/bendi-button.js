import BendiComponent from '../lib/bendi-component.js'

export default class Button extends BendiComponent {
  constructor() {
    super()
  }

  css(){
    return `
      :host {
        display: inline-block;
        border: 0;
        border-radius: var(--bendi-border-radius);
        background: var(--bendi-primary-color);
        line-height: 1.5em;
        font-weight: 500;
        font-size: 1em;
        margin-right: 0.5em;
        cursor: pointer;
        position: relative;
        transition: background 0.1s ease-in-out;
      }

      a {
        padding: 0.5em 1em;
        display: block;
        user-select: none;
        text-decoration: none;
        color: #fff;
      }
      a:focus {
        outline: none;
      }

      :host:after,
      :host:before {
        content: '';
        display: block;
        position: absolute;
        background: #fff;
        width: 0;
        height: 0;
        left: 50%;
        top: 50%;
        transform: none;
      }

      :host([subtle]) {
        background: var(--bendi-neutral-200);
      }

      :host([subtle]) a {
        color: var(--bendi-neutral-700);
      }
      
      :host([subtle]):before,
      :host([subtle]):after {
        background: var(--bendi-neutral-500);
      }

      :host([error]) {
        background: var(--bendi-red-primary);
      }

      :host([warning]) {
        background: var(--bendi-orange-primary);
      }

      :host([success]) {
        background: var(--bendi-green-primary);
      }

      :host([info]) {
        background: var(--bendi-purple-primary);
      }
      
      :host(:focus) {
        outline: var(--bendi-blue-highlight) auto 2px;
      }

      :host(:hover) {
        filter: brightness(0.95);
      }

      :host(:active) {
        filter: brightness(0.9) contrast(1.1);
      }

      :host([state="error"]) {
        background: var(--bendi-red-primary);
        color: transparent;
        animation: error 0.3s ease-in-out;
      }

      :host([state="error"]):after,
      :host([state="error"]):before {
        width: 10px;
        height: 2px;
        transform: rotate(45deg);
        transition: all 0.1s ease-in-out, transform 0.1s ease-in;
        left: calc(50% - 4px);
        top: calc(50% - 1px);
        animation: inner-error-after 0.3s linear;
        background: #fff;
      }

      :host([state="error"]):before {
        transform: rotate(-45deg);
        animation: inner-error-before 0.3s linear;
      }

      @keyframes load-in {
        from {
          height: 0;
          opacity: 0;
        }

        to {
          height: 32px;
          opacity: 1;
        }
      }

      @keyframes error {
        0% { transform: translateX(0px); }
        20% { transform: translateX(-2px); }
        40% { transform: translateX(4px); }
        60% { transform: translateX(-4px); }
        80% { transform: translateX(2px); }
        100% { transform: translateX(0px); }
      }

      @keyframes inner-error-before {
        0% { transform: translateX(0px) rotate(-45deg);}
        20% { transform: translateX(2px) rotate(-45deg); }
        40% { transform: translateX(-4px) rotate(-45deg); }
        60% { transform: translateX(4px) rotate(-45deg); }
        80% { transform: translateX(-2px) rotate(-45deg); }
        100% { transform: translateX(0px) rotate(-45deg); }
      }

      @keyframes inner-error-after {
        0% { transform: translateX(0px) rotate(45deg);}
        20% { transform: translateX(2px) rotate(45deg); }
        40% { transform: translateX(-4px) rotate(45deg); }
        60% { transform: translateX(4px) rotate(45deg); }
        80% { transform: translateX(-2px) rotate(45deg); }
        100% { transform: translateX(0px) rotate(45deg); }
      }

      :host([state="waiting"]) {
        color: transparent;
        cursor: wait;
      }

      :host([state="waiting"]):before,
      :host([state="waiting"]):after {
        width: 8px;
        height: 8px;
        border-radius: 4px;
        left: calc(50% - 10px);
        top: calc(50% - 4px);
        animation: waiting 0.3s infinite alternate;
      }
      :host([state="waiting"]):after {
        left: calc(50% + 2px);
        animation: waiting 0.3s infinite alternate-reverse ease-in-out;
      }

      @keyframes waiting {
        from {
          transform: scale(1);
        }
        to {
          transform: scale(0.7);
        }
      }

      :host([state="success"]) {
        background: var(--bendi-green-primary);
        color: transparent;
        animation: success 0.2s ease-in-out;
      }

      :host([state="success"]):before,
      :host([state="success"]):after {
        width: 2px;
        transition: all 0.1s ease-in-out;
        background: #fff;
        height: 5px;
        top: calc(50% - 2px);
        left: calc(50% - 2px);
        transform: rotate(-45deg);
      }
      :host([state="success"]):after {
        height: 9px;
        top: calc(50% - 5px);
        left: calc(50% + 2px);
        transform: rotate(45deg);
      }

      @keyframes success {
        0% {
          transform: scaleY(1) scaleX(1);
        }
        40% {
          transform: scaleY(1.13) scaleX(1.07);
        }
        100% {
          transform: scaleY(1) scaleX(1);
        }
      }
    `
  }

  html(){
    return `
      <a tabindex="-1">
        <slot></slot>
      </a>
    `
  }

  static get observedAttributes() {
    return ['href']
  }

  connectedCallback(){
    this.setAttribute('tabindex', 0)
    this.setAttribute('role', 'button')
    this.addEventListener('click', ()=>{
      if(this.hasAttribute('async'))
        this.wait()
    })
  }


  attributeChangedCallback(name, oldValue, newValue){
    console.log(name)
    if(name == 'href')
      this.select('a').setAttribute('href', newValue)
  }

  wait(){
    this.setAttribute('state', 'waiting')
  }

  success(){
    this.blur()
    this.setAttribute('state', 'success')
    setTimeout(()=>{
      this.removeAttribute('state')
    }, 1200)
  }

  error(){
    this.blur()
    this.setAttribute('state', 'error')
    setTimeout(()=>{
      this.removeAttribute('state')
    }, 1200)
  }
}
