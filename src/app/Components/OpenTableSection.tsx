import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function OpenTableSection() {
  return (
    <section id="reservation" className="h-[650px] flex items-center justify-center bg-black bg-opacity-50 p-4 relative">
        <Image
          src="/images/KikisOpenTableBG.webp"
          alt="Kiki's Restaurant Hero Image"
          fill
          priority
          className="object-cover object-center"
        />
      <Card className="absolute w-full max-w-md md:ml-10">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Make a Reservation</CardTitle>
          <CardDescription className="text-center">
            *for groups over 6 please{" "}
            <Link href="/contact" className="underline text-blue-600 hover:text-blue-800">
              contact us
            </Link>
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="people" className="text-sm font-medium">
              Number of People
            </label>
            <Select>
              <SelectTrigger id="people">
                <SelectValue placeholder="Select number of people" />
              </SelectTrigger>
              <SelectContent>
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <SelectItem key={num} value={num.toString()}>
                    {num} {num === 1 ? "person" : "people"}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label htmlFor="date" className="text-sm font-medium">
              Date
            </label>
            <Input type="date" id="date" />
          </div>
          <div className="space-y-2">
            <label htmlFor="time" className="text-sm font-medium">
              Time
            </label>
            <Input type="time" id="time" />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-red-700 hover:bg-red-800">Find a Table</Button>
        </CardFooter>
      </Card>
    </section>
  )
}

