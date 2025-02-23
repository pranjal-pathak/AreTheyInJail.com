import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-border py-8 md:py-12">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-playfair text-xl mb-4">CONTACT</h3>
            <p className="text-muted-foreground">
              For secure information sharing
              <br />
              and whistleblower protection
            </p>
          </div>
          <div>
            <h3 className="font-playfair text-xl mb-4">LEGAL</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link href="/privacy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-primary transition-colors">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-primary transition-colors">
                  Legal Disclaimer
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-playfair text-xl mb-4">MISSION</h3>
            <p className="text-muted-foreground">
              Dedicated to exposing corruption
              <br />
              and promoting justice in India
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

