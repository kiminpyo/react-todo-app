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

[배포링크 바로가기](https://sage-moxie-699b78.netlify.app/)(localStorage)
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
<summary>🗔 클라이언트</summary>
<div markdown="1">

```
-  클라이언트 
 -로그인 및 회원가입 
클라이언트에서 HOC로 각 페이지 라우팅시에 로그인이 필요한 페이지인지 아닌지를 판단할 수 있게 권한을 옵션으로 설정했습니다.
redux-thunk를 이용해 로그인/로그아웃/회원가입에 대한 상태관리를 했습니다.

- todoList CRUD
현재localStorage로 CRUD작업이 진행되었습니다. 
react-beautiful-dnd라이브러리를 이용해, 드래그 앤 드롭이 가능하게끔 구현했습니다.
depth가 얕아 useState를 이용해, 상태관리를 진행했고 props로 데이터를 내려 list를 수정 및 삭제합니다.

- 마이페이지
유저에게 필요한 정보를 받아와 데이터를 보여줍니다. 현재는 아이디/이메일/이름만 가져오고 있습니다.

```

</div>
</details>

<details>
<summary>💾 서버(express.js)</summary>
<div markdown="1">

```
글이 길어져 velog에 정리.
정리 중입니다.
```
<a href="https://velog.io/@kip/series/react%EC%99%80-mongoDB%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%B4-%EC%9B%B9-%ED%8E%98%EC%9D%B4%EC%A7%80-%EC%A0%9C%EC%9E%91">설명 바로가기</a>

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






