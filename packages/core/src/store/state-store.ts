import type { StreamState, StreamStateHolder } from '@ceramicnetwork/common'
import type { StreamID } from '@ceramicnetwork/streamid'

/**
 * Generic state store interface.
 */
export interface StateStore {
  open(networkName: string): void
  close(): Promise<void>
  save(streamStateHolder: StreamStateHolder): Promise<void>
  load(streamId: StreamID): Promise<StreamState | null>
  list(streamId?: StreamID): Promise<string[]>
  remove(streamId: StreamID): Promise<void>
}
