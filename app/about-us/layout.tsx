export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* children은 page.tsx에 해당 */}
      {children}
      {/* Footer처럼 page.tsx 컴포넌트 아래에 들어가게 됨 */}
      &copy; Next JS is great!
    </div>
  );
}
