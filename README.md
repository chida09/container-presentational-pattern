## Container/Presentationalパターン概要
 - Container: アプリケーションのロジックに関心を持ち、APIや状態管理ライブラリから取得したデータをPresentational Componentに渡す
 - Presentational: UIに関心を持ち、Propsで受け取ったデータをどのように表示するかのみを役割として持つ
 - 2 つのコンポーネントを組み合わせることで、アプリケーションロジックの処理とビューを分離することが可能になる

### 利点
 - プレゼンテーションコンポーネントは、データを変更することなく表示するだけなので、再利用が容易になる
 - ロジックのテストであればContainer Component、UIのテストであればPresentational Componentといった具合に、それぞれのComponentに対して何をテストすれば良いかが明確になる


## 参考
 - [コンテナ・プレゼンテーションパターン｜フロントエンドのデザインパターン](https://zenn.dev/morinokami/books/learning-patterns-1/viewer/presentational-container-pattern)
 - [Container/Presentationalパターン再入門](https://zenn.dev/buyselltech/articles/9460c75b7cd8d1)
 - [Angular/React両方を経験して得られた堅牢なアプリケーション設計 - DEV Community](https://dev.to/puku0x/angular-react-2h4j)


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
