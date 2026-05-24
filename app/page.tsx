export default function Home() {
  return (
    <main className="min-h-screen bg-[#050b18] text-white overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(3,8,24,0.94) 0%, rgba(3,8,24,0.78) 42%, rgba(3,8,24,0.25) 100%), url('/bg-heat-premium.png')",
          }}
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(251,146,60,0.22),transparent_35%)]" />

        <header className="relative z-10 max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center">
  <img
    src="/logo-white.png"
    alt="Gebrüder Peters Polska"
    className="h-16 w-auto"
  />
</div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
  <a href="#uslugi" className="hover:text-cyan-300 transition">
    Usługi
  </a>

  <a href="#realizacje" className="hover:text-cyan-300 transition">
    Realizacje
  </a>

  <a href="#proces" className="hover:text-cyan-300 transition">
    Proces
  </a>

  <a
    href="https://wroclaw-klimatyzacja.pl"
    target="_blank"
    className="hover:text-cyan-300 transition"
  >
    Klimatyzacja
  </a>

  <a
    href="https://wroclaw-pv.pl"
    target="_blank"
    className="hover:text-cyan-300 transition"
  >
    Fotowoltaika
  </a>

  <a href="#kontakt" className="hover:text-cyan-300 transition">
    Kontakt
  </a>
</nav>

          <a
            href="tel:+48730230919"
            className="hidden md:block bg-orange-400 hover:bg-orange-300 text-[#04101f] px-5 py-3 rounded-full font-black transition"
          >
            730 230 919
          </a>
        </header>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 border border-orange-300/20 bg-white/10 backdrop-blur-xl rounded-full px-5 py-2 text-sm text-orange-100 mb-8">
              ♨️ Premium pompy ciepła • Wrocław i okolice
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.92] tracking-[-3px] mb-8">
              Ciepło, które pracuje
              <span className="block text-orange-300">dla Ciebie</span>
            </h1>

            <p className="text-xl md:text-2xl text-orange-100/90 leading-relaxed max-w-2xl mb-10">
              Projektujemy i wykonujemy nowoczesne systemy pomp ciepła,
              które zapewniają komfort, oszczędność energii i niezawodne ogrzewanie domu.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <a
                href="https://wa.me/48730230919?text=Dzień dobry,%20interesuje%20mnie%20bezpłatna%20wycena%20pompy%20ciepła"
                target="_blank"
                className="bg-orange-400 hover:bg-orange-300 text-[#03101f] px-8 py-5 rounded-full font-black text-lg shadow-[0_20px_60px_rgba(251,146,60,0.35)] transition text-center"
              >
                Umów bezpłatną wycenę
              </a>

              <a
                href="tel:+48730230919"
                className="border border-white/20 bg-white/10 hover:bg-white/15 backdrop-blur-xl px-8 py-5 rounded-full font-black text-lg transition text-center"
              >
                Zadzwoń teraz
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="uslugi" className="relative py-28 bg-[#071225]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(251,146,60,0.16),transparent_35%)]" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <p className="text-orange-300 font-bold mb-4">Nasze usługi</p>

            <h2 className="text-4xl md:text-6xl font-black tracking-[-2px] mb-6">
              Ogrzewanie zaprojektowane pod komfort
            </h2>

            <p className="text-orange-100/70 text-xl leading-relaxed">
              Łączymy doświadczenie techniczne z nowoczesnym podejściem do energooszczędnego ogrzewania budynków.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {[
              {
                icon: "♨️",
                title: "Pompy ciepła dla domu",
                text: "Nowoczesne systemy ogrzewania dla domów jednorodzinnych. Komfort cieplny, oszczędność energii i estetyczne wykonanie instalacji.",
              },
              {
                icon: "🏢",
                title: "Pompy ciepła dla firm",
                text: "Rozwiązania grzewcze dla obiektów komercyjnych, usługowych i firmowych. Stabilna praca systemu i optymalizacja kosztów energii.",
              },
              {
                icon: "🌡️",
                title: "Ogrzewanie i chłodzenie",
                text: "Pompa ciepła może zapewniać komfort przez cały rok — ogrzewanie zimą oraz chłodzenie w cieplejszych miesiącach.",
              },
              {
                icon: "📐",
                title: "Dobór i projekt systemu",
                text: "Analizujemy budynek, zapotrzebowanie energetyczne i dobieramy rozwiązanie dopasowane do realnych potrzeb inwestora.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group rounded-[32px] border border-white/10 bg-white/[0.06] backdrop-blur-xl p-8 hover:bg-white/[0.09] hover:border-orange-300/30 transition shadow-[0_20px_70px_rgba(0,0,0,0.25)]"
              >
                <div className="w-16 h-16 rounded-2xl bg-orange-400/15 border border-orange-300/20 flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-black mb-5">{item.title}</h3>

                <p className="text-orange-100/70 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="py-28 bg-[#fff7ed] text-[#061225]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <p className="text-orange-600 font-bold mb-4">Dlaczego my?</p>

            <h2 className="text-4xl md:text-6xl font-black tracking-[-2px] mb-6">
              Komfort, oszczędność i nowoczesna technologia
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {[
              ["Komfort cieplny", "Projektujemy systemy, które zapewniają stabilne ogrzewanie i wygodę użytkowania przez cały rok."],
              ["Niższe rachunki", "Pompy ciepła pomagają ograniczyć koszty ogrzewania i zwiększyć efektywność energetyczną budynku."],
              ["Sprawna realizacja", "Dbamy o organizację montażu, terminowość oraz porządek na każdym etapie pracy."],
              ["Opieka techniczna", "Doradzamy, montujemy i wspieramy klientów również po uruchomieniu instalacji."],
            ].map(([title, text], i) => (
              <div
                key={title}
                className="bg-white rounded-[32px] p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] border border-orange-100"
              >
                <div className="text-orange-600 text-5xl font-black mb-8">
                  0{i + 1}
                </div>

                <h3 className="text-2xl font-black mb-5">{title}</h3>

                <p className="text-slate-600 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REALIZACJE */}
      <section id="realizacje" className="py-28 bg-[#071225]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[0.9fr_1.4fr] gap-12 items-center mb-14">
            <div>
              <p className="text-orange-300 font-bold mb-4">Realizacje</p>

              <h2 className="text-4xl md:text-6xl font-black tracking-[-2px] mb-6">
                Realizacje pomp ciepła
              </h2>

              <p className="text-orange-100/70 text-xl leading-relaxed">
                Projektujemy i montujemy nowoczesne systemy pomp ciepła z dbałością
                o wydajność, estetykę wykonania oraz maksymalny komfort użytkowania.
              </p>
            </div>

            <div className="rounded-[40px] overflow-hidden border border-white/10 shadow-[0_30px_90px_rgba(0,0,0,0.45)]">
              <img
                src="/realizacja-1.jpeg"
                alt="Pompa ciepła przy domu"
                className="w-full h-[520px] object-cover hover:scale-105 transition duration-700"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-[36px] overflow-hidden border border-white/10 shadow-[0_25px_70px_rgba(0,0,0,0.35)]">
              <img
                src="/realizacja-2.jpg"
                alt="Montaż pompy ciepła"
                className="w-full h-[420px] object-cover hover:scale-105 transition duration-700"
              />
            </div>

            <div className="rounded-[36px] overflow-hidden border border-white/10 shadow-[0_25px_70px_rgba(0,0,0,0.35)]">
              <img
                src="/realizacja-3.jpeg"
                alt="Nowoczesna instalacja grzewcza"
                className="w-full h-[420px] object-cover hover:scale-105 transition duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="proces" className="py-28 bg-[#fff7ed] text-[#061225]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <p className="text-orange-600 font-bold mb-4">Proces</p>

            <h2 className="text-4xl md:text-6xl font-black tracking-[-2px] mb-6">
              Od analizy do gotowego systemu grzewczego
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {[
              ["Analiza budynku", "Sprawdzamy potrzeby energetyczne budynku i dobieramy odpowiedni kierunek rozwiązania."],
              ["Dobór urządzenia", "Pomagamy wybrać pompę ciepła dopasowaną do powierzchni, instalacji i oczekiwań użytkownika."],
              ["Profesjonalny montaż", "Realizujemy montaż systemu z dbałością o bezpieczeństwo, wydajność i estetykę wykonania."],
              ["Serwis i wsparcie", "Pozostajemy do dyspozycji również po uruchomieniu systemu i zakończeniu realizacji."],
            ].map(([title, text], i) => (
              <div
                key={title}
                className="relative bg-white rounded-[32px] p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] border border-orange-100"
              >
                <div className="w-14 h-14 rounded-full bg-orange-600 text-white flex items-center justify-center font-black text-xl mb-8">
                  {i + 1}
                </div>

                <h3 className="text-2xl font-black mb-5">{title}</h3>

                <p className="text-slate-600 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPINIE */}
      <section className="py-28 bg-[#071225]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <p className="text-orange-300 font-bold mb-4">Opinie klientów</p>

            <h2 className="text-4xl md:text-6xl font-black tracking-[-2px] mb-6">
              Zaufanie budowane jakością realizacji
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Profesjonalne doradztwo, sprawny montaż i bardzo dobre dopasowanie pompy ciepła do budynku.",
              "Świetny kontakt, szybka realizacja i konkretne wyjaśnienie działania całego systemu.",
              "Nowoczesne podejście, dobra organizacja pracy i wysoka jakość wykonania instalacji.",
            ].map((text) => (
              <div
                key={text}
                className="rounded-[32px] border border-white/10 bg-white/[0.06] backdrop-blur-xl p-8 shadow-[0_20px_70px_rgba(0,0,0,0.25)]"
              >
                <div className="text-orange-300 text-xl mb-6">★★★★★</div>

                <p className="text-orange-100/80 leading-relaxed mb-8">
                  „{text}”
                </p>

                <div className="text-white font-bold">Klient z Wrocławia</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 bg-[#fff7ed] text-[#061225]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-orange-600 font-bold mb-4">FAQ</p>

            <h2 className="text-4xl md:text-6xl font-black tracking-[-2px]">
              Najczęstsze pytania
            </h2>
          </div>

          <div className="space-y-5">
            {[
              ["Czy pompa ciepła nadaje się do każdego domu?", "W wielu przypadkach tak, ale dobór systemu zależy od zapotrzebowania budynku, izolacji oraz istniejącej instalacji grzewczej."],
              ["Czy pompa ciepła może chłodzić?", "Tak. W odpowiedniej konfiguracji system może zapewniać zarówno ogrzewanie, jak i chłodzenie."],
              ["Czy wykonujecie bezpłatną wycenę?", "Tak. Przygotowujemy indywidualną wycenę po analizie potrzeb budynku i rozmowie z klientem."],
              ["Czy można połączyć pompę ciepła z fotowoltaiką?", "Tak. Połączenie pompy ciepła z instalacją PV może zwiększyć opłacalność i niezależność energetyczną budynku."],
            ].map(([q, a]) => (
              <div
                key={q}
                className="bg-white rounded-[28px] p-7 shadow-[0_15px_40px_rgba(15,23,42,0.06)] border border-orange-100"
              >
                <h3 className="text-2xl font-black mb-3">{q}</h3>

                <p className="text-slate-600 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="kontakt" className="relative py-28 bg-[#050b18]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(251,146,60,0.20),transparent_35%)]" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black tracking-[-2px] mb-6">
            Komfort zaczyna się od dobrze zaprojektowanego ogrzewania
          </h2>

          <p className="text-orange-100/70 text-xl mb-10">
            Skontaktuj się z nami i umów bezpłatną analizę oraz wycenę pompy ciepła.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <a
              href="tel:+48730230919"
              className="bg-orange-400 hover:bg-orange-300 text-[#03101f] px-8 py-5 rounded-full font-black text-lg transition"
            >
              📞 730 230 919
            </a>

            <a
              href="https://wa.me/48730230919?text=Dzień dobry,%20interesuje%20mnie%20pompa%20ciepła"
              target="_blank"
              className="bg-green-500 hover:bg-green-400 text-white px-8 py-5 rounded-full font-black text-lg transition"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#020817] border-t border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-6 text-orange-100/60">
          <div>
            <div className="text-white font-black text-2xl mb-2">
              Gebrüder Peters Polska Sp. z o.o.
            </div>
            <p>Pompy ciepła Wrocław i okolice</p>
          </div>

          <div>
            <p>Telefon: 730 230 919</p>
            <p>Wrocław • Dolny Śląsk</p>
          </div>
        </div>
      </footer>

      {/* STICKY */}
      <a
        href="tel:+48730230919"
        className="fixed bottom-6 right-6 z-50 bg-orange-400 hover:bg-orange-300 text-[#03101f] px-6 py-4 rounded-full font-black shadow-[0_20px_60px_rgba(251,146,60,0.35)] transition"
      >
        📞 Zadzwoń
      </a>
    </main>
  );
}