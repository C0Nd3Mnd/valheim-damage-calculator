/**
 * ArmorPiece is a list of the different parts of the body where the player can
 * wear armor.
 */
export enum ArmorPiece {
  Helmet,
  Chest,
  Leg,
  Cape,
}

/**
 * DamageType is a list of all types of damage the player can suffer.
 */
export enum DamageType {
  Blunt,
  Pierce,
  Slash,
  Fire,
  Poison,
  Spirit,
  Frost,
  Lightning,
}

/**
 * Tenacity is a list of possible tenacity levels (resistances or weaknesses).
 * The value of the key represents the damage multiplier.
 */
export enum Tenacity {
  VeryWeak = 2,
  Weak = 1.5,
  Neutral = 1,
  Resistant = 0.5,
  VeryResistant = 0.25,
  Immune = 0,
}

/**
 * Armor describes one specific piece of armor.
 */
export interface Armor {
  /**
   * Name of the of armor piece.
   */
  name: string;
  /**
   * Piece of armor this piece attaches/belongs to.
   */
  piece: ArmorPiece;
  /**
   * `tenacityModifiers` is a list of damage types the piece of armor is weak or
   * resistant to. If a damage type is not listed here, the default
   *  {@link Tenacity.Neutral} is assumed.
   *
   * TODO Figure out whether weakness calculation applies before or after armor.
   */
  tenacityModifiers: {
    type: DamageType;
    tenacity: Tenacity;
  }[];
  /**
   * `levels` is an array of armor values per level of the armor piece.
   */
  levels: number[];
}

/**
 * ArmorSet describes a set of armor. When the player wears all pieces of a set
 * (usually all body parts or all minus a cape), the tenacityModifiers of the
 * set apply.
 */
export interface ArmorSet {
  /**
   * `name` of the set.
   */
  name: string;
  /**
   * `pieces` of the set (names).
   */
  pieces: string[];
  /**
   * `tenacityModifiers` is a list of damage types the set of armor is weak or
   * resistant to. If a damage type is not listed here, the default
   *  {@link Tenacity.Neutral} is assumed.
   */
  tenacityModifiers: {
    type: DamageType;
    tenacity: Tenacity;
  }[];
}
