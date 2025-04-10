import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ProfileHeader } from "@/components/ProfileHeader"
import { ProfileDetails } from "@/components/ProfileDetails"
import {useNavigate} from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

const Profile = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-full">
    <Header />
    <div className="p-3 flex gap-3 items-center mt-1.5">
        <button onClick={()=>navigate(-1)}>
          <ArrowLeft />
        </button>
      </div>
    <main className="max-w-3xl mx-auto px-4 py-2 space-y-6">
      <ProfileHeader/>
      <ProfileDetails/>
      <Footer></Footer>
    </main>
  </div>
  )
}

export default Profile