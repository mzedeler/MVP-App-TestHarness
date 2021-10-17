export interface Receipt {
    previousBoardHash: string;
    boardHash: string;
    registeredAt: string;
    serverSignature: string;
    voteSubmissionId: number;
}
