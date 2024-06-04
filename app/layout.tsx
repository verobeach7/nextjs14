import { Metadata } from "next";
import Navigation from "../components/navigation";

// page.tsx에서 metadata를 가져와 layout.tsx의 metadata에 결합함
export const metadata: Metadata = {
  title: {
    // %s 자리에 page.tsx의 title에 지정해 놓은 값이 들어감
    template: "%s | Next Movies",
    // page.tsx의 metadata에 title이 지정되지 않는 경우 디폴트 값을 가짐
    default: "Next Movies",
  },
  description: "The best movies on the best framework",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
