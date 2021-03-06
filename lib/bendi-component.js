export default class BendiComponent extends HTMLElement {
  constructor() {
    super()
    let css, html
    if(this.css) css = this.css()
    if(this.html) html = this.html()
    if(html || css){
      this.attachShadow({'mode':'open'})
      this.shadowRoot.innerHTML = `
        ${css ? `<style>${css}</style>` : ''}
        ${html ? html : '<slot></slot>'}
      `
    }

    this.shadowRoot.querySelectorAll('*').forEach(el=> {
      Array.from(el.attributes).forEach(attr => {
        const prefix = attr.name.charAt(0)
        if(prefix == '@'){
          this[attr.value] = this[attr.value].bind(this)
          el.addEventListener(attr.name.slice(1), this[attr.value])
          el.removeAttribute(attr.name)
        }
        if(prefix == '?'){
          el.toggleAttribute(attr.name.slice(1), attr.value != 'false')
          el.removeAttribute(attr.name)
        }
      })
    })
  }

  select(s){
    return this.shadowRoot.querySelector(s)
  }

  fire(event, detail, attr){
    if(!attr) attr = 'on' + event
    let tempAttr = this.getAttribute(attr)
    if(tempAttr) eval(tempAttr)
    this.removeAttribute(attr)
    let e = new CustomEvent(event, {detail: detail, bubbles: true})
    this.dispatchEvent(e)
    setTimeout(()=>{
      if(tempAttr) this.setAttribute(attr, tempAttr)
    },1)
  }

  log(message, type){
    let color = ['deebff', '0747ac']
    if(type == 'warning') color = ['fffae5', 'ee6900']
    if(type == 'error') color = ['ffbdad', 'bf2600']
    let name = this.tagName.toLowerCase()
    let groupLabel = `%cbendi%c${name}%c${message}`
    let style = ['padding:4px 8px;border-radius: 3px 0 0 3px;background:#0052cc;color:#fff','padding: 4px 8px;background:#4c9aff;color:#172b4d;', `padding: 4px 8px;border-radius:0 3px 3px 0;background:#${color[0]};color:#${color[1]};border-left:1px solid #${color[1]}`]
    console.group(groupLabel, style[0], style[1], style[2])
    console.info(this)
    console.groupEnd(groupLabel)
  }

  updateTime(time, dom){
    if(this._updateTimer) clearTimeout(this._updateTimer)

    const secondsPerUnit = [
      ['s', 1],
      ['m', 60],
      ['h', 3600],
      ['d', 86400],
      ['w', 604800],
      ['m', 2629746],
      ['y', 31556952]
    ]

    const secondsAgo = Math.floor((Date.now() - parseInt(time)) / 1000) + 1

    for(let i = 1; i < secondsPerUnit.length; i++){
      if(secondsAgo < secondsPerUnit[i][1]){
        let unit = secondsPerUnit[i - 1][0]
        let interval = secondsPerUnit[i - 1][1]
        this._updateTimer = setTimeout(()=>{this.updateTime(time, dom)}, interval * 1000)
        dom.innerHTML = Math.floor(secondsAgo / interval) + unit + ' ago'
        break
      }
    }
  }
}
