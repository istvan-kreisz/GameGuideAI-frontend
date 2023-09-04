import {
	object,
	string,
	number,
	Infer,
	defaulted,
	union,
	literal,
	optional,
	boolean,
} from 'superstruct'

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const Game = union([literal('Skyrim'), literal('Terraria'), literal('Starfield')])

type Game = Infer<typeof Game>

const ALLGAMES: Game[] = ['Skyrim', 'Terraria', 'Starfield']

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const Conversation = object({
	id: string(),
	userId: string(),
	game: Game,
	createdAt: number(),
	updatedAt: number(),
})

type Conversation = Infer<typeof Conversation>

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const MessageType = union([literal('User'), literal('AI')])

type MessageType = Infer<typeof MessageType>

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const Message = object({
	id: string(),
	userId: string(),
	questionId: optional(string()),
	type: MessageType,
	text: string(),
	isLoading: defaulted(boolean(), false),
	createdAt: number(),
})

type Message = Infer<typeof Message>

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const Subscription = union([literal('pro')])

type Subscription = Infer<typeof Subscription>

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const UserInfo = object({
	id: string(),
	name: optional(string()),
	email: string(),
	subscription: optional(Subscription),
	subscribedDate: optional(string()),
	timezone: optional(string()),
	createdAt: number(),
	updatedAt: defaulted(number(), 0),
	currentMonth: optional(number()),
	messageCountInCurrentMonth: defaulted(number(), 0),
})

type UserInfo = Infer<typeof UserInfo>

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export { Game, ALLGAMES, Conversation, MessageType, Message, Subscription, UserInfo }
