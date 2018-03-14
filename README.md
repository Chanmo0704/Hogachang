# Hoga

## 문제 해결 전략
- socket.io를 이용하여 실시간 웹을 구현한다.
- server에서 input 데이터를 1초마다 client로 전송 한다.
- client에서는 socket.io에 등록된 event callback으로, 서버에서 전송된 Data를 받아서 처리한다.
- client에서 데이터를 이용하여, 매도, 매수 데이터를 화면에 보여준다.
- 매도와 매수의 가격이 같으면 체결가가 되며, 변경 시 최근 체결가를 현재가에 표시한다.

## 프로젝트 빌드 방법
- npm start 를 통해서 webpack 빌드를 한다.
- npm run server 를 통해서 서버를 실행한다.
- localhost:3000을 통해서 브라우져에 접속합니다.
- npm run test를 통해서 **.test.js 형식의 테스트 코드를 실행합니다. (jasmine과 karma를 사용)
