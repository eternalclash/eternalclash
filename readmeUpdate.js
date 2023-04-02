import { writeFileSync } from 'node:fs';
import Parser from "rss-parser";

/**
 * README.MD에 작성될 페이지 텍스트
 * @type {string}
 */
let text = `# Hi there 👋

<div align = 'center'>
  
![header](https://capsule-render.vercel.app/api?type=waving&height=250&text=SuchangLee&fontSize=90)
 <img src="http://mazassumnida.wtf/api/v2/generate_badge?boj=eternalclash97">
  <p>Welcome</p>

<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white"/>
<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/>
<img src="https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=Redux&logoColor=white"/>
  <img src="https://img.shields.io/badge/Java-00A98F?style=flat-square&logo=Java&logoColor=white"/> 
  <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=white"/>

  <p>My stats</p>
  
  
<a href="https://github.com/anuraghazra/github-readme-stats">
  <img src="https://github-readme-stats.vercel.app/api?username=eternalclash&show_icons=true&theme=material-palenight&hide_border=true&bg_color=20232a&icon_color=E3E3E3A8&text_color=fff" width=49.2% />
</a>
<a href="https://github.com/denvercoder1/github-readme-streak-stats">
  <img src="http://github-readme-streak-stats.herokuapp.com?user=eternalclash&theme=react&ring=C691E94D&fire=C691E9&sideNums=C691E9&currStreakNum=C691E9&sideLabels=FFFFFF&currStreakLabel=FFFFFF&dates=E3E3E3A8&hide_border=true" width=49.2% />
</a>

  </div>

## 📕 Latest Blog Posts

`;

// rss-parser 생성
const parser = new Parser({
    headers: {
        Accept: 'application/rss+xml, application/xml, text/xml; q=0.1',
    }});

(async () => {

    // 피드 목록
    const feed = await parser.parseURL('https://eternalclash97.tistory.com/rss');

    // 최신 5개의 글의 제목과 링크를 가져온 후 text에 추가
    for (let i = 0; i < 5; i++) {
        const {title, link} = feed.items[i];
        console.log(`${i + 1}번째 게시물`);
        console.log(`추가될 제목: ${title}`);
        console.log(`추가될 링크: ${link}`);
        text += `<a href=${link}>${title}</a></br>`;
    }

    // README.md 파일 작성
    writeFileSync('README.md', text, 'utf8', (e) => {
        console.log(e)
    })

    console.log('업데이트 완료')
})();
