// Creator: Meraz Alvee

var link=document.createElement('link');link.rel='stylesheet';link.type='text/css';link.href='../assets/styles/caption.css';document.head.appendChild(link);const captionBoxes=document.querySelectorAll('.caption-box');captionBoxes.forEach((box)=>{const bottom=document.createElement('div');bottom.className='caption-bottom';const shareIcons=document.createElement('div');shareIcons.className='share-icons';const captionText=box.querySelector('.caption-top').textContent;const facebookIcon=document.createElement('a');facebookIcon.href=`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(captionText)}`;facebookIcon.target='_blank';facebookIcon.innerHTML=`<svg class="noShadow" viewBox="0 0 24 24"><path fill="#0866ff" d="M22.06 12.06C22.06 6.5 17.56 2 12 2S1.94 6.5 1.94 12.06c0 5.02 3.68 9.18 8.49 9.94v-7.03H7.88v-2.91h2.55V9.84c0-2.52 1.5-3.91 3.8-3.91 1.1 0 2.25.2 2.25.2v2.48h-1.27c-1.25 0-1.64.78-1.64 1.57v1.89h2.79l-.45 2.91h-2.34v7.03c4.81-.76 8.49-4.92 8.49-9.94Z"></path></svg>`;const whatsappIcon=document.createElement('a');whatsappIcon.href=`https://api.whatsapp.com/send?text=${encodeURIComponent(captionText)}`;whatsappIcon.target='_blank';whatsappIcon.innerHTML=`<svg class="noShadow" viewBox="0 0 256 256"><path fill="#0cc143" d="m152.58 145.23l23 11.48A24 24 0 0 1 152 176a72.08 72.08 0 0 1-72-72a24 24 0 0 1 19.29-23.54l11.48 23L101 118a8 8 0 0 0-.73 7.51a56.47 56.47 0 0 0 30.15 30.15A8 8 0 0 0 138 155ZM232 128a104 104 0 0 1-152.88 91.82l-34.05 11.35a16 16 0 0 1-20.24-20.24l11.35-34.05A104 104 0 1 1 232 128m-40 24a8 8 0 0 0-4.42-7.16l-32-16a8 8 0 0 0-8 .5l-14.69 9.8a40.55 40.55 0 0 1-16-16l9.8-14.69a8 8 0 0 0 .5-8l-16-32A8 8 0 0 0 104 64a40 40 0 0 0-40 40a88.1 88.1 0 0 0 88 88a40 40 0 0 0 40-40"/></svg>`;const messengerIcon=document.createElement('a');messengerIcon.href=`https://www.messenger.com/t/?message=${encodeURIComponent(captionText)}`;messengerIcon.target='_blank';messengerIcon.innerHTML=`<svg class="noShadow" viewBox="0 0 24 24"><path fill="#a535fb" d="M2.08 11.7c0-5.53 4.33-9.62 9.92-9.62s9.92 4.09 9.92 9.62-4.33 9.62-9.92 9.62c-1 0-1.97-.13-2.87-.38a.805.805 0 0 0-.53.04l-1.98.87a.795.795 0 0 1-1.12-.7l-.06-1.77c0-.22-.1-.42-.26-.56a9.443 9.443 0 0 1-3.11-7.12Zm6.88-1.81-2.91 4.63c-.29.44.26.94.68.62l3.13-2.37c.21-.17.5-.17.72 0l2.31 1.74c.69.52 1.69.33 2.15-.4l2.91-4.63c.29-.44-.26-.93-.68-.62l-3.13 2.37c-.21.17-.5.17-.71 0l-2.31-1.74c-.66-.5-1.59-.37-2.08.29-.03.03-.05.07-.07.11Z"></path></svg>`;shareIcons.append(facebookIcon,whatsappIcon,messengerIcon);const actionButtons=document.createElement('div');actionButtons.className='action-buttons';const copyIcon=document.createElement('button');copyIcon.innerHTML=`<svg class="noShadow" viewBox="0 0 512 512"><path fill="currentColor" d="M408 480H184a72 72 0 0 1-72-72V184a72 72 0 0 1 72-72h224a72 72 0 0 1 72 72v224a72 72 0 0 1-72 72"/><path fill="currentColor" d="M160 80h235.88A72.12 72.12 0 0 0 328 32H104a72 72 0 0 0-72 72v224a72.12 72.12 0 0 0 48 67.88V160a80 80 0 0 1 80-80"/></svg>`;copyIcon.onclick=()=>{navigator.clipboard.writeText(captionText).then(()=>{copyIcon.innerHTML=`<svg class="noShadow" viewBox="0 0 24 24"><path fill="currentColor" d="M18.333 6A3.667 3.667 0 0 1 22 9.667v8.666A3.667 3.667 0 0 1 18.333 22H9.667A3.667 3.667 0 0 1 6 18.333V9.667A3.667 3.667 0 0 1 9.667 6zM15 2c1.094 0 1.828.533 2.374 1.514a1 1 0 1 1-1.748.972C15.405 4.088 15.284 4 15 4H5c-.548 0-1 .452-1 1v9.998c0 .32.154.618.407.805l.1.065a1 1 0 1 1-.99 1.738A3 3 0 0 1 2 15V5c0-1.652 1.348-3 3-3zm1.293 9.293L13 14.585l-1.293-1.292a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414"/></svg>`;setTimeout(()=>{copyIcon.innerHTML=`<svg class="noShadow" viewBox="0 0 512 512"><path fill="currentColor" d="M408 480H184a72 72 0 0 1-72-72V184a72 72 0 0 1 72-72h224a72 72 0 0 1 72 72v224a72 72 0 0 1-72 72"/><path fill="currentColor" d="M160 80h235.88A72.12 72.12 0 0 0 328 32H104a72 72 0 0 0-72 72v224a72.12 72.12 0 0 0 48 67.88V160a80 80 0 0 1 80-80"/></svg>`},1500)})};const downloadIcon=document.createElement('button');downloadIcon.innerHTML=`<svg class="noShadow" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12m10-5.75a.75.75 0 0 1 .75.75v5.19l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06l1.72 1.72V7a.75.75 0 0 1 .75-.75m-4 10a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"/></svg>`;downloadIcon.onclick=()=>{const blob=new Blob([captionText],{type:'text/plain'});const link=document.createElement('a');link.href=URL.createObjectURL(blob);link.download='caption.txt';link.click()};actionButtons.append(copyIcon,downloadIcon);bottom.append(shareIcons,actionButtons);box.append(bottom)});
