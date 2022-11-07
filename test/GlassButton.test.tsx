import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { GlassButton } from '../src/components/GlassButton';

describe("GlassButton test", () => {
    test("Default text value", () => {

        render(<GlassButton></GlassButton>);

        expect(screen.getByText(/Default/i)).toBeDefined()
    })
})