let style = document.createElement('style')
style.setAttribute('type', "text/css")
style.innerHTML = `
:root {
  --bendi-primary-color: var(--bendi-blue-primary);
  --bendi-secondary-color: var(--bendi-neutral-200);

  --bendi-border-radius: 4px;

  --bendi-red-primary: #ae2c17;
  --bendi-red-secondary: #dd472e;
  --bendi-red-highlight: #f83312;
  --bendi-red-subtle: #f5c7c7;

  --bendi-orange-primary: #de7224;
  --bendi-orange-secondary: #f08538;
  --bendi-orange-hightlight: #f76903;
  --bendi-orange-subtle: #fccfaf;

  --bendi-yellow-primary: #f7ca45;
  --bendi-yellow-secondary: #f7e666;
  --bendi-yellow-highlight: #fde428;
  --bendi-yellow-subtle: #fdfbc2;

  --bendi-green-primary: #239e4c;
  --bendi-green-secondary: #59c57e;
  --bendi-green-highlight: #07d74e;
  --bendi-green-subtle: #ccfadb;

  --bendi-teal-primary: #1ba3ba;
  --bendi-teal-secondary: #66d5e2;
  --bendi-teal-highlight: #07deec;
  --bendi-teal-subtle: #c8f7f9;

  --bendi-blue-primary: #0e5ba2;
  --bendi-blue-secondary: #418ed4;
  --bendi-blue-highlight: #0076e3;
  --bendi-blue-subtle: #d5e9fb;

  --bendi-purple-primary: #7043a6;
  --bendi-purple-secondary: #9367c8;
  --bendi-purple-highlight: #9342f6;
  --bendi-purple-subtle: #e2cff9;

  --bendi-magenta-primary: #b33a6c;
  --bendi-magenta-secondary: #d35a8d;
  --bendi-magenta-highlight: #e82477;
  --bendi-magenta-subtle: #fcd0e3;

  --bendi-neutral-0: #ffffff;
  --bendi-neutral-100: #e4e5e6;
  --bendi-neutral-200: #cfd1d2;
  --bendi-neutral-300: #afb2b5;
  --bendi-neutral-400: #8c9296;
  --bendi-neutral-500: #6a7176;
  --bendi-neutral-600: #464c50;
  --bendi-neutral-700: #1c1e21;
}
`
document.head.appendChild(style)