export interface Role {
  id: string;
  name: string;
  color: number;
}

export interface TextChannel {
  type: "text";
  id: string;
  name: string;
}

export interface VoiceChannel {
  type: "voice";
  id: string;
  name: string;
}

export interface Guild {
  id: string;
  name: string;
  imageUrl: string;
  roles: Role[],
  textChannels: TextChannel[],
  voiceChannels: VoiceChannel[],
}

export const Playground: Guild = {
  id: "285409136995336192",
  name: "Revxrsal Playground",
  imageUrl: "https://ijazah.vercel.app/android-chrome-192x192.png",
  roles: [
    {
      id: "662747112034795555",
      name: "Little",
      color: 0x11FEBB
    },
    {
      id: "336920458492641280",
      name: "needs v",
      color: 0xFFFABE
    },
    {
      id: "662747112011111555",
      name: "Bog",
      color: 0xCCFEBB
    },
    {
      id: "322222458492641280",
      name: "Garbage",
      color: 0xAA1111
    }
  ],
  textChannels: [
    {
      type: "text",
      id: "285409136995336192",
      name: "everyone"
    },
    {
      type: "text",
      id: "559375537894850561",
      name: "bots"
    }
  ],
  voiceChannels: [
    {
      id: "1052868303128899624",
      name: "games",
      type: "voice"
    }
  ]
}