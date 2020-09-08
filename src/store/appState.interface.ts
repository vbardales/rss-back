export interface AppState {
  coreLogicState: CoreLogicState;
}

export interface CoreLogicState {
  stationRetrieval: {
    station: {
      id: string | null;
    }
  }
}
