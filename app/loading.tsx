export default function Loading() {
  return (
    <main className="route-state" role="status" aria-live="polite">
      <span className="loading-orb" aria-hidden="true" />
      <h1>슬리피를 만나러 가는 중입니다.</h1>
      <p>소개 화면을 불러오고 있습니다.</p>
    </main>
  );
}
