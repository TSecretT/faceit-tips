export interface Settings {
    active: boolean,
    app_id: string,
    created_at: string,
    custom: boolean,
    events: string[],
    id: string,
    name: string,
    public: boolean,
    restrictions: object[],
    scale: boolean,
    third_party_id: string,
    tokens: { header_name: string, header_value: string, query_name: string, query_value: string }
    type: string,
    updated_at: string,
    url: string,
}

export interface Team {
    id: string,
    name: string,
    type: string,
    avatar: string,
    leader_id: string,
    co_leader_id: string,
    roster: Player[],
    substitutions: number,
    substitutes?: null
}

export interface Player {
    id: string,
    nickname: string,
    avatar: string,
    game_id: string,
    game_name: string,
    game_skill_level: number,
    membership: string,
    anticheat_required: boolean
}

export interface Match{
    id: string,
    organizer_id: string,
    region: string,
    game: string,
    version: number,
    entity: {
        id: string,
        name: string,
        type: string
    },
    teams?: Team[]
    created_at: string,
    updated_at: string
}

export interface Hook {
    transaction_id: string,
    event: string,
    event_id: string,
    third_party_id: string,
    app_id: string,
    timestamp: string,
    retry_count: number,
    version: number,
    payload: Match
}

export interface MatchStat {
    "Assists": string
    "Deaths": string
    "Final Score": string
    "First Half Score": string
    "HS": string
    "HS %": string
    "K/D": string
    "K/R": string
    "Kills": string
    "MVPs": string
    "Map": string
    "Map ID": string
    "Penta Kills": string
    "Quadro Kills": string
    "Region": string
    "Result": string
    "Rounds": string
    "Second Half Score": string
    "Team Name": string
    "Tripple Kills": string
    "bestOf": string
    "c1": string
    "competitionId": string
    "created_at": number
    "date": number
    "elo":string
    "game": string
    "gameMode": string
    "i19": string
    "matchId": string
    "matchRound": string
    "nickname": string
    "played": string
    "playerId": string
    "premade": boolean
    "status": string
    "teamId": string
    "updated_at": number
}