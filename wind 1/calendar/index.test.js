import calendar from './index.js';

describe('Test Kalendarza', () => {
    describe('Główny element kalendarza', () => {
        it('powinien mieć podstawowe style', () => {
            const props = { disabled: false };
            const classes = calendar.root({ props }).class;
            expect(classes).toContain('inline-flex'); 
            expect(classes).toContain('max-w-full');  
            expect(classes).toContain('rounded-md'); 
        });

        it('powinien być wyszarzony gdy jest wyłączony', () => {
            const props = { disabled: true };
            
            const classes = calendar.root({ props }).class;
            
            const ostatniElement = classes[classes.length - 1];
            expect(ostatniElement).toEqual({
                'opacity-40 select-none pointer-events-none cursor-default': true
            });
        });
    });

    describe('Pole wprowadzania daty', () => {
        it('powinno mieć podstawowe style pola wprowadzania', () => {

            const props = { showIcon: false };
            
            const classes = calendar.input({ props }).class;
            
            // Sprawdzenie wyników
            expect(classes).toContain('flex flex-auto');            
            expect(classes).toContain('appearance-none');            
        });
    });

    // Test 3: Sprawdzamy panel kalendarza
    describe('Panel z kalendarzem', () => {
        // Sprawdzamy wygląd normalnego panelu
        it('powinien mieć odpowiednie style dla zwykłego panelu', () => {
            // Przygotowanie danych - zwykły panel
            const props = { inline: false };
            
            // Wywołanie testowanej funkcji
            const classes = calendar.panel({ props }).class;
            
            // Sprawdzenie wyników
            expect(classes).toContain('rounded-lg');                  // Sprawdzamy zaokrąglenie
            expect(classes).toContain('bg-surface-0 dark:bg-surface-800'); // Sprawdzamy kolor tła
            
            // Sprawdzamy czy panel jest absolutnie pozycjonowany
            expect(classes[0]).toEqual({
                'absolute': true,
                'inline-block': false
            });
        });
    });
});