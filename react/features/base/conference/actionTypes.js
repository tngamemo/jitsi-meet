import { Symbol } from '../react';

/**
 * The type of the Redux action which signals that a specific conference has
 * failed.
 *
 * {
 *     type: CONFERENCE_FAILED,
 *     conference: JitsiConference,
 *     error: string
 * }
 */
export const CONFERENCE_FAILED = Symbol('CONFERENCE_FAILED');

/**
 * The type of the Redux action which signals that a specific conference has
 * been joined.
 *
 * {
 *     type: CONFERENCE_JOINED,
 *     conference: JitsiConference
 * }
 */
export const CONFERENCE_JOINED = Symbol('CONFERENCE_JOINED');

/**
 * The type of the Redux action which signals that a specific conference has
 * been left.
 *
 * {
 *     type: CONFERENCE_LEFT,
 *     conference: JitsiConference
 * }
 */
export const CONFERENCE_LEFT = Symbol('CONFERENCE_LEFT');

/**
 * The type of the Redux action which signals that a specific conference will be
 * joined.
 *
 * {
 *     type: CONFERENCE_WILL_JOIN,
 *     room: string
 * }
 */
export const CONFERENCE_WILL_JOIN = Symbol('CONFERENCE_WILL_JOIN');

/**
 * The type of the Redux action which signals that a specific conference will be
 * left.
 *
 * {
 *     type: CONFERENCE_WILL_LEAVE,
 *     conference: JitsiConference
 * }
 */
export const CONFERENCE_WILL_LEAVE = Symbol('CONFERENCE_WILL_LEAVE');

/**
 * The type of the Redux action which signals that the lock state of a specific
 * <tt>JitsiConference</tt> changed.
 *
 * {
 *     type: LOCK_STATE_CHANGED,
 *     conference: JitsiConference,
 *     locked: boolean
 * }
 */
export const LOCK_STATE_CHANGED = Symbol('LOCK_STATE_CHANGED');

/**
 * The type of the Redux action which sets the audio-only flag for the current
 * conference.
 *
 * {
 *     type: SET_AUDIO_ONLY,
 *     audioOnly: boolean
 * }
 */
export const SET_AUDIO_ONLY = Symbol('SET_AUDIO_ONLY');

/**
 * The type of redux action which signals that video will be muted because the
 * audio-only mode was enabled / disabled.
 *
 * {
 *     type: _SET_AUDIO_ONLY_VIDEO_MUTED,
 *     muted: boolean
 * }
 *
 * @protected
 */
export const _SET_AUDIO_ONLY_VIDEO_MUTED
    = Symbol('_SET_AUDIO_ONLY_VIDEO_MUTED');

/**
 * The type of redux action which sets the video channel's lastN (value).
 *
 * {
 *     type: SET_LASTN,
 *     lastN: number
 * }
 */
export const SET_LASTN = Symbol('SET_LASTN');

/**
 * The type of the Redux action which sets the password to join or lock a
 * specific JitsiConference.
 *
 * {
 *     type: SET_PASSWORD,
 *     conference: JitsiConference,
 *     method: Function
 *     password: string
 * }
 */
export const SET_PASSWORD = Symbol('SET_PASSWORD');

/**
 * The type of the Redux action which sets the name of the room of the
 * conference to be joined.
 *
 * {
 *     type: SET_ROOM,
 *     room: string
 * }
 */
export const SET_ROOM = Symbol('SET_ROOM');
