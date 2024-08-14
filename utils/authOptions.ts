import prisma from '@/lib/prisma';
import { compare } from 'bcrypt'


import NextAuth, { type NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
 export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt'
  },
  providers: [
    CredentialsProvider({
      name: 'Sign in',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'hello@example.com'
        },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        if(!credentials?.email || !credentials.password)
        {return null}
        console.log('creds provided')
        console.log(credentials.email)
        const user = await prisma.client_profile.findUnique(
          {
            where : {
              email: credentials.email         }
          }
        )

        if(!user){
          console.log('no user')
          return null
        }
        console.log(user)
        const isPwordValid = await compare(credentials.password,
          user.password)

        if(!isPwordValid){
          console.log('pword invalid')
          return null
        }
        console.log('return')
        return{
          id: user.id + '',
          email: user.email,
          name: user.name,
          coachProfileId: user.coachProfileId,
          randomKey: 'hey cool'
        }
      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks:{
    session:({session, token})=>{
      console.log('session ', token, session)
      return {...session,
      user:{
          ...session.user,
          id: token.id,
          randomKey: token.randomKey
      }
      }

    },
    jwt:({token, user})=>{
      console.log('jwt callback ',{ token, user})

      if(user){
        const u = user as unknown as any
        return {
          ...token,
          id:u.id,
          randomKey: u.randomKey

        }
      }
      return token
    }
  }

}