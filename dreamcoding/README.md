# Next.js의 역사와 버전

- 2016년 등장한 React의 프레임워크
- Vercel이 개발
- Server Side Rendering, Static Site Generation 가능
- 2020년도 v9.3
  - Incremental Static Generation
  - Rewirte, Redirect
- 2022년도 v13
  - New routing (/app)
  - (nested) Layouts
  - Serve Components
  - HTML Streaming
  - New toolchain (Turbopack)

## Next.js의 6가지 원칙

1. Out-of-the-box functionality requiring no setup
2. Javascript everywhere
3. Automatic code-splitting and server-rendering
4. Configurable data-fetching
5. Anticipating requests
6. Simplifying deployment

---

# Client Side Rendering (CSR)

- 브라우저에 표기하기 위한 모든 코드들을 클라이언트가 다운로드 받아서 실행하고표
  현하는 방식.

## 장점

- 한 번 로딩 되면, 그 이후에는 빠른 UX 제공
- 서버의 부하가 적음

## 단점

- 페이지 로딩 시간(TTV: time to view, FCP: First Contentful Paint)이 길다.
- 자바스크립트 활성화 필수
- SEO 최적화가 힘듦
- 클라이언트가 모든 걸 실행하기 때문에 보안에 취약
- CDN(Content Delivery Network)에 캐시가 안됨

# Static Site Generation (SSG)

- 빌드할 때, 미리 페이지들을 HTML로 만들어서 CDN에 올려놓는 방식 (정적 사이트)

## 장점

- 페이지 로딩 시간(TTV)이 빠름
- 자바스크립트 활성화 필요 없음
- SEO 최적화 가능
- 보안이 뛰어남
- CDN에 캐시가 됨

## 단점

- 데이터가 정적임
- 사용자별 정보 제공이 어려움

# Incremental Static Generation (ISG)

- SSG의 단점을 보완하기 위해 나온 방식
- 특정 주기로 렌더링

## 장점

- 페이지 로딩 시간(TTV)이 빠름
- 자바스크립트 활성화 필요 없음
- SEO 최적화 가능
- 보안이 뛰어남
- CDN에 캐시가 됨
- **데이터가 주기적으로 업데이트 됨**

## 단점

- 여전히 실시간 데이터가 아님
- 여전히 사용자별 정보 제공이 어려움

# Server Side Rendering (SSR)

- 클라이언트가 요청할 때 렌더링

## 장점

- 페이지 로딩 시간(TTV)이 빠름
- 자바스크립트 활성화 필요 없음
- SEO 최적화 가능
- 보안이 뛰어남
- **실시간 데이터 사용**
- **사용자별 필요한 데이터 사용**

## 단점

- 비교적 느릴 수 있음
- 서버의 부하가 큼
- CDN에 캐시가 안됨

---

# Next.js Hydration

- Next.js는 CSR을 사용하면서, SSR의 장점을 취하고자 함
- 클라이언트에게 화면을 빨리 보여주기 위해서 정적인 HTML을 먼저 보여주고, 그 이
  후에 자바스크립트를 통해 동적인 부분을 렌더링하는 방식

---

# Next.js Decision Tree

## SSG
- 사용자의 로그인이 필요 없음
- 데이터가 변경되지 않음

## ISR
- 사용자의 로그인이 필요 없음
- 데이터가 변경 됨
- 데이터가 자주 변경되지 않음 (자주 변경 되면 SSR)

## SSR, CSR
- 사용자의 로그인이 필요
