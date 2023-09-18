import qr from "./images/image-qr-code.png";

function App() {
  return (
    <div className="h-screen font-Outfit flex items-center justify-center">
      <main className="w-[280px] bg-white rounded-2xl p-3">
        <img src={qr} alt="qr" className="rounded-xl mb-4" />
        <section className="text-center mx-2">
          <h3 className="font-bold text-darkBlue text-xl mb-4">
            Improve your front-end skills by building projects
          </h3>
          <p className="text-grayishBlue text-sm mb-4">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
