# FE 기술
- Next.js 14
- React
- typescript
- tanstackQuery

# 🎬 Demo Video
https://github.com/user-attachments/assets/16d16370-36bc-4e7d-a276-081a3eb0bc04


<img width="1048" alt="Screenshot 2024-06-03 at 6 54 10 PM" src="https://github.com/DoTheZ-Team/Overview/assets/24919880/2b80f79c-5366-458b-acfa-7bfe09d3cae2">

저희 서비스에 대한 자세한 내용은 [위키페이지](https://github.com/DoTheZ-Team/Overview/wiki)참고 바랍니다.
## 🖥️ Introduction

KEA 4기 Team DoTheZ(두더지) Glue 페이지에 온 것을 환영합니다! 👋🏻   
해당 페이지는 **카카오엔터프라이즈** 아카데미에서 약 4달(2024.03 ~ 2024.06)동안 협업한 프로젝트에 대해 기술되어 있습니다.

<br>

저희 프로젝트 GLUE는 다이어리 꾸미기와 비슷하게 자신이 원하는 스티커를 이용해, 블로그를 꾸밀 수 있는 블로그 서비스입니다.

저희 서비스의 차별점은 풀로 색종이를 붙이듯 **자유로운 커스터 마이징**이 가능하다는 것입니다.

<h3> 주요기능 </h3>

1️⃣ 원하는 위치에 어디든 스티커를 부착하여 포스팅할 수 있습니다.

2️⃣ 정해진 스티커들만을 사용해야 했던 기존 서비스들과는 다르게 달리 모델을 이용하여 커스텀 스티커 제작할 수 있습니다.

3️⃣ 사용자가 작성한 포스팅의 해시태그를 기반으로 사용자와 취향이 유사한 블로그를 추천해줍니다.

유사한 취미를 가진 블로그에 어떻게 블꾸 되었는지 읽는 것이 하나의 재미 요소입니다.

<br>

## Contribution

저희의 GLUE 서비스를 직접 사용해보고 싶으시다면, [해당 페이지](https://resplendent-souffle-0732ad.netlify.app/) 로 이동하여 즉시 사용가능합니다.

[실제 랜딩 페이지]

<img width="797" alt="Screenshot 2024-06-03 at 7 34 02 PM" src="https://github.com/DoTheZ-Team/Overview/assets/24919880/d2052fc9-247b-4e42-a2c5-98234a68f9ee">
  
저희 서비스는 카카오를 통해 로그인이 가능하며, 카카오 서비스로부터 인가 코드를 받아 처리를 합니다.


<br>

## 🧑🏻‍💻👩🏻‍💻 Contributors

<h3> Frontend part Team members </h3>

| Profile | Name | Role | Project Repository |
| :---: | :---: | :---: | :---: |
| <a href="https://github.com/yeyounging"><img src="https://avatars.githubusercontent.com/u/133792082?v=4" height="120px"></a> | 공예영 <br> **yeyounging**| Frontend |[Web-Service](https://github.com/DoTheZ-Team/glue-fe)|
| <a href="https://github.com/Collection50"><img src="https://avatars.githubusercontent.com/u/86355699?v=4" height="120px"></a> | 김성민 <br> **Collection50**| Frontend | [Web-Service](https://github.com/DoTheZ-Team/glue-fe) |

<h3> DevOps part Team members </h3>

| Profile | Name | Role | Project Repository |
| :---: | :---: | :---: | :---: |
| <a href="https://github.com/kylo-dev"><img src="https://avatars.githubusercontent.com/u/103489352?v=4" height="120px"></a> | 김현겸 <br> **kylo-dev**| MSA 환경 시스템 아키텍처 설계, GitOps 구축, <br/> Infra 구축, Blog 서버 API 개발, ElasticSearch 검색 API 개발 | [Blog-Service](https://github.com/DoTheZ-Team/blog-service) |
| <a href="https://github.com/leejuae"><img src="https://avatars.githubusercontent.com/u/51390115?v=4" height="120px"></a> | 이주애 <br> **leejuae · Genie**| DevOps sitcker 서버, recommend 서버 개발 <br/> AI 서비스 구현| [Recommend-Service](https://github.com/DoTheZ-Team/recommendation-service) <br/> [Sticker-Server](https://github.com/DoTheZ-Team/sticker-service/tree/develop) |

<h3> Architecture part Team members </h3>

| Profile | Name | Role | Project Repository |
| :---: | :---: | :---: | :---: |
| <a href="https://github.com/sungsil0624"><img src="https://avatars.githubusercontent.com/u/113875098?v=4" height="120px"></a> | 정준희 <br> **sungsil0624**| Architecture | [Auth-Server](https://github.com/DoTheZ-Team/auth-service) |
| <a href="https://github.com/anselmo228"><img src="https://avatars.githubusercontent.com/u/24919880?v=4" height="120px"></a> | 정희찬 <br> **anselmo**| Architecture | [Post-Server](https://github.com/DoTheZ-Team/post-service)

<br>

## ⚙️ System Architecture

<img width="790" alt="glue_시스템아키텍처_v2 0" src="https://github.com/DoTheZ-Team/.github/assets/103489352/b1760036-407d-46a3-ae40-56acb41506fb">

## 🌲 CDC Pipeline

<img width="790" alt="glue_cdc_v2" src="https://github.com/DoTheZ-Team/.github/assets/103489352/c8b8881d-6870-4297-9abc-738e40fdb8de">

## 📮 CI/CD Pipeline (GitOps)

<img width="355" alt="glue_cicd" src="https://github.com/DoTheZ-Team/.github/assets/103489352/f8ee05bc-c46e-48ee-8076-1c51239ffe7a">


## 🚨 Notice

해당 GLUE 서비스의 아이디어 저작권 및 소스코드는 KEA 4기 DoTheZ에게 있으며 코드 무단 사용 및 무단 배포를 절대적으로 금합니다. 

해당 프로젝트에 관해 문의 및 연락은 [해당 프로필](https://github.com/sungsil0624) 로 연락 부탁드립니다.

Team DoTheZ(Do the Best 지금)

<img src="https://github.com/DoTheZ-Team/.github/assets/103489352/ef3bee80-8058-4de8-a4fd-b957eea5e83b" width="500px">



