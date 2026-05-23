import { Sidebar } from "./components/layout/Sidebar"

export default function App() {
  return (
    <div className="flex h-screen bg-[#303446] text-gray-100">
      {/* 左カラム: サイドバー */}
      <Sidebar />

      {/* 中央カラム: メインコンテンツ */}
      <main className="flex-1 overflow-y-auto p-8">
        <h2 className="text-2xl font-bold mb-4">メインコンテンツエリア</h2>
        <p>カレンダーはここに表示されます</p>
      </main>

      {/* 右カラム: サブコンテンツ */}
      <aside className="w-80 border-l border-gray-600 p-6 hidden xl:block">
        <h2 className="text-2xl font-bold mb-4">サイドコンテンツエリア</h2>
        <p>サブコンテンツはここに置く</p>
        <p>理想はアイコンを押すと表示したりしなかったり</p>
      </aside>
    </div>
  );
}
