import TransitionEffect from "@/components/TransitionEffect"
import Layout from "@/components/Layout"
import MyGrades from "@/pages/MyGrades"

export const metadata = {
  title: 'Tristan | Grades',
}

export default function Grades() {

  return (
    <>
      <TransitionEffect />
      <main className='w-full min-h-screen bg-lightl dark:bg-darkl'>
        <Layout className='pt-[90px] md:pt-[96px] min-h-screen'>
          <MyGrades />
        </Layout>
      </main>
    </>
  )
}