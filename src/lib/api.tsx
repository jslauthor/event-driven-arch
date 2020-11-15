interface CreateChannelPayload {
  user_id: string;
  channel_name: string;
}

interface SendMessagePayload {
  user_id: string;
  channel_name: string;
  message: string;
}

interface RetrieveChannelsPayload {}

type SocialEventPayloads =
  | CreateChannelPayload
  | SendMessagePayload
  | RetrieveChannelsPayload;

enum SocialEventTypes {
  CREATE_CHANNEL,
  SEND_MESSAGE,
  RETRIEVE_CHANNELS
}

export type SocialEvent<P> = {
  type: SocialEventTypes;
  payload: P;
};

export const dispatch = (event: SocialEvent<SocialEventPayloads>) => {
  switch (event.type) {
    case SocialEventTypes.CREATE_CHANNEL:
      console.log("create channel");
      break;
    case SocialEventTypes.SEND_MESSAGE:
      console.log("send message");
      break;
    case SocialEventTypes.RETRIEVE_CHANNELS:
      console.log("retrieve channels");
      break;
  }
};
