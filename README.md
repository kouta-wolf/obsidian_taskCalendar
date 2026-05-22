# Obsidian TaskCalendar (仮)

ObsidianでのMarkdownファイルをカレンダー形式で視覚化と編集するためのデスクトップアプリケーション

## 開発の背景 (Motivation)
- 既存のタスク管理ツールは機能が豊富な分、サブスクリプションでの機能制限がある。
- オンラインが基本だが通信不可環境の場合オフライン対応してないと見れなくなる。
- プラグインで作るタスク.mdは大体が中身の無い空っぽなノートが量産される。
- Obsidian内部でカレンダーを常時表示すると肝心の画面が狭い。

本プロジェクトは「ローカルなMarkdownファイルをドキュメントとして扱いつつ、モダンなUIでタスク管理を行う」ことを目的とした自分専用の解決ソフトです。

## 主な機能 (Planned Features) の予定
- [ ] ローカル内のMarkdownファイルをスキャンし、YAMLプロパティに基づいて予定を抽出
- [ ] Reactを使用した直感的なドラッグ＆ドロップや迅速なtodo入力による予定管理
- [ ] 新規作成時に特定プロジェクトへの自動リンク作成
- [ ] ObsidianのURIを介したアプリから直接Obsidianの操作の実行
- [ ] Obsidianの `Advanced URI` を利用した連携

## 技術スタック (Tech Stack) の予定
- Frontend: React, TypeScript, Tailwind CSS
- Runtime: Electron (Windows Native)
- Build Tool: Vite (via electron-vite)
- State Management: React Hooks
- Styling: Tailwind CSS

## 開発プロセス (Development Process)
本プロジェクトでは、開発の意思決定プロセスをGitHub Issueにて公開しています。
- 技術選定の変遷 #1 を参照

## セットアップ(Setup)
後日記載予定
- git cloneやnpm run devの実行
- exe形式のパッケージでの実行
