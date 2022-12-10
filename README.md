## 프로젝트 요약

```
기존의 todoList에서 localStorage에 담아 CRUD를 진행하다가,
mongoDB를 이용해 로그인과 axios로 통신해 데이터를 주고받기 위해 리팩토링 중입니다.
```

---

### 🔧 기술 스택

<div align=center> 
  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"/> 
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>   
 <img src="https://img.shields.io/badge/tailwindCSS-06B6D4?style=for-the-badge&logo="Tailwind CSS & logoColor=black"/> 
  <img src="https://img.shields.io/badge/react_router-CA4245?style=for-the-badge&logo=React-Router&logoColor=black"/> 
 <img src="https://img.shields.io/badge/redux_thunk-764ABC?style=for-the-badge&logo=redux&logoColor=white"/> 
</div>

---

### 💻 실행 방법

1.  라이브러리를 설치합니다.

```
npm install
```

2.  프로젝트를 실행합니다.

```
 npm start
```

### 배포 링크

[배포링크 바로가기](https://sage-moxie-699b78.netlify.app/)
<br/>

## 프로젝트 설명

<details>
<summary>  📂 디렉토리 구조</summary>
<div markdown="1">

```

📁 server
 ┣ 📁 config
    ┣ dev.js
    ┣ prod.js
    ┗ key.js
 ┣ 📁 middleware
    ┗ middleware.js
 ┣ 📁 models
    ┗ User.js
 ┣ index.js
📁 src(client)
 ┣ 📁 actions
    ┣user_action.js
    ┗type.js
 ┣ 📁 reducers
    ┣ index.js
    ┗ user_reducer.js
 ┣ 📁 components
    ┣ Mypage.js
    ┣ Form.js
    ┣ List.js
    ┣ Lists.js
    ┣ Spinner.js
    ┗ Layout.js
 ┣ 📁 HOC
    ┗ auth.js
 ┣ 📂 pages
   ┣ LoginPage.js
   ┣ MainPage.js
   ┣ NoMatchPage.js
   ┣ SignupPage.js
   ┗ MyPage.js
 ┣ App.js
 ┣ index.js
 ┣ tailwind.config.js
 
```

</div>
</details>

<details>
<summary>❓ 기능설명</summary>
<div markdown="1">

```

```
</div>
</details>


---


### 사용한 라이브러리 및 API, CDN 등

- axios
- react-beautiful-dnd
- react-router
- redux-thunk
- redux-promise
- mongoose
- express
- concurrently
---






