
function contactPage() {
  const url = 'mailto:collinsonyango635@gmail.com';

  window.open(url, "_blank");

}

function submitted() {
     alert("Submission succesful!");
}

//function to compose mail
const mailsvg = document.getElementById('mailsend');

mailsvg.addEventListener('click', () => {
  
  const url = 'mailto:collinsonyango635@gmail.com';

  window.open(url, '_blank');
});


//function to open facebook url
const xsvg = document.getElementById('x');

xsvg.addEventListener('click', () => {
  
  const url = 'https://x.com/_lakesidetech?t=mIZm-tIC66vh5mbUp-AOcw&s=09';

  window.open(url, '_blank');
});


//function to open instagram url
const igsvg = document.getElementById('instagram');

igsvg.addEventListener('click', () => {
  
  const url = 'https://www.instagram.com/lakeside.tech?igsh=eDVwM250a2w0cGw2';

  window.open(url, '_blank');
});

//function to open facebook url
const fbsvg = document.getElementById('facebook');

fbsvg.addEventListener('click', () => {
  
  const url = 'https://www.facebook.com/profile.php?id=61552142864543 ';

  window.open(url, '_blank');
});

